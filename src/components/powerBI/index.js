import React, { useEffect, useRef, useState } from 'react';
import * as powerbi from 'powerbi-client'; // Import Power BI Client SDK

const PowerBIReport = ({ embedToken, embedUrl, reportId, setTableData, pageName }) => {
    const [display, setDisplay] = useState(null)
    const reportRef = useRef(null);

    useEffect(() => {
        console.log("embedToken", embedToken)
        if (reportRef.current) {
            const powerBiService = new powerbi.service.Service(powerbi.factories.hpmFactory, powerbi.factories.wpmpFactory, powerbi.factories.routerFactory);
            const models = powerbi.models; // Access models

            const embedConfig = {
                type: 'report',
                id: reportId,
                embedUrl: embedUrl,
                // embedUrl: 'https://api.powerbi.com/v1.0/myorg/groups/c4f734d8-7472-4d38-bfb5-8b73bc285e88/reports/adf73436-f9f2-4648-89ea-324849663cd0',
                accessToken: embedToken,
                tokenType: models.TokenType.Aad,
                settings: {
                    panes: {
                        filters: { visible: true },
                        pageNavigation: { visible: true },
                    },
                },
            };

            const report = powerBiService.embed(reportRef.current, embedConfig); // Use powerBiService to embed the report
            let dataobj = {}; // Store extracted data for all pages

            function extractDataFromPage(page) {
                console.log(`Extracting data from page: ${page.displayName}`);
                return page.getVisuals().then(visuals => {
                    console.log(visuals, "Visuals on page");
                    const tableVisuals = visuals.filter(visual => visual.title === 'Table' || visual.type === 'matrix');
                    const promises = visuals.map(visual => {
                        return visual.exportData(models.ExportDataType.Summarized, 100).then(data => {
                          
                            console.log(`Data from visual "${visual.title}":`, data.data);
                            const finalData = pageName === "Home" ? HomeJSON(data.data,visual.title) : SummaryJSON(data.data,visual.title);
                            console.log(`finalData`, finalData);
                            return { title: visual.title, data: finalData };
                        }).catch(error => {
                            console.error(`Error exporting data from visual ${visual.title}:`, error);
                            return null; // Return null if there's an error
                        });
                    });
                    return Promise.all(promises);
                });
            }

            // Function to convert CSV data to JSON
            // Function to convert CSV data to JSON
            function HomeJSON(csv, dataType) {
                console.log("csv", csv);
                var lines = csv.split("\n");
                var result = [];
            
                // Determine headers based on dataType
                var headers;
                if (dataType === "Card") {
                   headers = lines[0].split(",");
                } else if (dataType === "varByProduct") {
                    headers = ["Product Type", "Variance"];
                } else if (dataType === "Actual Sales and Average Sales by Month") {
                    headers = ["Month", "Actual Sales", "Average Sales"];
                } else if (dataType === "Table") {
                    headers = ["District Name", "Value", "Percentage"];
                } else {
                    throw new Error("Unknown data type");
                }
            
                // Loop through data lines (skip header lines)
                for (var i = 1; i < lines.length; i++) { // Start from 1 to skip header
                    var obj = {};
                    var currentline = lines[i].split(",");
            
                    // Handle different data types
                    if (dataType === "Card" && currentline.length === 1 && !currentline.includes('')) {
                        obj[headers[0]] = currentline[0].trim(); // Year
                        result.push(obj);
                    } else if (dataType === "varByProduct" && currentline.length === 2) {
                        obj[headers[0]] = currentline[0].trim(); // Product Type
                        obj[headers[1]] = currentline[1].trim(); // Variance
                        result.push(obj);
                    } else if (dataType === "Actual Sales and Average Sales by Month" && currentline.length === 3) {
                        obj[headers[0]] = currentline[0].trim(); // Month
                        obj[headers[1]] = Number(currentline[1].trim()); // Actual Sales (as number)
                        obj[headers[2]] = Number(currentline[2].trim()); // Average Sales (as number)
                        result.push(obj);
                    } else if (dataType === "Table" && currentline.length === 3) {
                        obj[headers[0]] = currentline[0].trim(); // District Name
                        obj[headers[1]] = currentline[1].trim(); // Value (as string)
                        obj[headers[2]] = currentline[2].trim(); // Percentage (as string)
                        result.push(obj);
                    }
                }
            
                return result;
            }

           

            function SummaryJSON(csv,dataType) {
                // console.log("csv",csv)
                var lines = csv.split("\n");
                var result = [];
                let headers = []
                if(dataType === "Actual Sales and Sales by   ,   and   "){
                    headers = ["Index", "Year", "Month", "Actual Sales", "Sales"]
                }else {
                    headers = lines[0].split(",");

                }

                for (var i = 1; i < lines.length - 1; i++) {
                    var obj = {};
                    var currentline = lines[i].split(",");
                    for (var j = 0; j < headers.length; j++) {
                        obj[headers[j].trim()] = isNaN(Number(currentline[j])) ? currentline[j] : Number(currentline[j]);
                    }
                    result.push(obj);
                }

                console.log("SummaryJSON",result)
                return result;
            }

            report.on('loaded', () => {
                console.log('Report loaded');
                report.getPages().then(pages => {
                    console.log("pages",pages)
                    const pagesToActivate = ['Home', 'Summary '];
                    // const summaryPage = pages.filter(page => pagesToActivate.includes(page.displayName))
                    const summaryPage = pages.find(page => page.displayName === pageName);
                    if (summaryPage) {
                        summaryPage.setActive().then(() => {
                            console.log('Active page set to Summary');
                            // Now extract data from the Summary page
                            extractDataFromPage(summaryPage).then(data => {
                                dataobj[summaryPage.displayName] = data; // Store data for the Summary page
                                dataobj[pageName] = dataobj[pageName].filter(item => item !== null);
                                console.log(`Data from ${summaryPage.displayName}:`, data);
                                setTableData(dataobj); // You can use setTableData to pass the extracted data
                            });
                            setDisplay('none')
                        }).catch(error => {
                            console.error('Error setting active page:', error);
                        });
                    } else {
                        console.error('Summary page not found');
                    }
                }).catch(error => {
                    console.error('Error getting pages from the report:', error);
                });

                // Get all pages in the report
                // report.getPages().then(pages => {
                //     console.log("Pages:", pages);

                //     // Define an array of pages to extract data from
                //     // const pagesToExtract = ['Home', 'Summary ']; // Adjust display names as needed
                //     const pagesToExtract = ['Home']; // Adjust display names as needed

                //     // Extract data from each specified page
                //     const extractionPromises = pages.filter(page => pagesToExtract.includes(page.displayName))
                //         .map(page => extractDataFromPage(page).then(data => {
                //             dataobj[page.displayName] = data; // Store data for each page
                //             console.log(`Data from ${page.displayName}:`, data);
                //         }));

                //     // Wait for all data extraction to complete
                //     Promise.all(extractionPromises).then(() => {
                //         dataobj.Home = dataobj.Home.filter(item => item !== null);
                //         console.log('All data extracted:', dataobj);
                //         // You can now use the dataobj which contains data from both pages
                //     }).catch(error => {
                //         console.error('Error during data extraction:', error);
                //     });
                // }).catch(error => {
                //     console.error('Error getting pages from the report:', error);
                // });
            });





            // report.on('loaded', () => {
            //     console.log('Report loaded');
            //     report.getPages().then(function (pages) {
            //         console.log("pages",pages)
            //         pages.forEach(function (page) {

            //             page.getVisuals().then(function (visuals) {

            //                 visuals.forEach(function (visual, i) {
            //                     // console.log(visual, i, visuals.length, "visual");
            //                     console.log(visual, "visual");


            //                     visual
            //                         .exportData(models.ExportDataType.Summarized, 100)
            //                         .then(function (data) {
            //                             function dataToJSON(csv) {
            //                                 var lines = csv.split("\n");

            //                                 var result = [];

            //                                 var headers = lines[0].split(",");

            //                                 for (var i = 1; i < lines.length - 1; i++) {
            //                                     var obj = {};
            //                                     var currentline = lines[i].split(",");
            //                                     for (var j = 0; j < headers.length; j++) {
            //                                         if (isNaN(Number(currentline[j]))) {
            //                                             // obj[headers[j]] = currentline[j].replace("\r", "");
            //                                             // //console.log(typeof(currentline[j]),"currentline[j]")
            //                                             obj[headers[j].trim()] = currentline[j];
            //                                         } else {
            //                                             // obj[headers[j]] = currentline[j].replace("\r", "");
            //                                             // //console.log(typeof(currentline[j]),"currentline[j]")

            //                                             obj[headers[j].trim()] = Number(currentline[j]);
            //                                         }
            //                                     }

            //                                     result.push(obj);
            //                                 }

            //                                 return result;
            //                             }
            //                             var finalData = dataToJSON(data.data);
            //                             var obj = { [visual.title]: { data: finalData } }
            //                             console.log(finalData, obj, dataobj, visuals.length, Object.keys(dataobj).length, "powerBI finalData");


            //                             dataobj = { ...dataobj, ...obj }
            //                             console.log("dataobj", dataobj)
            //                             // console.log(dataobj.keys.length,visuals.length,"visuals.length")
            //                             if (Object.keys(dataobj).length == visuals.length) {

            //                                 //   setReportData(dataobj,page)
            //                             }
            //                             // setReportData(finalData, visual.title);
            //                         })
            //                         .catch(function (errors) {
            //                             //console.log(errors);
            //                         });
            //                 });
            //             });
            //         });
            //     });



            //     // report.getPages().then((pages) => {
            //     //     if (pages && pages.length > 0) {
            //     //         const activePage = pages[0]; // Assuming the first page
            //     //         activePage.getVisuals().then((visuals) => {
            //     //             const tableVisual = visuals.find((visual) => visual.type === 'table');
            //     //             console.log("tableVisual",visuals)
            //     //         })
            //     //         // console.log("Active Page:", activePage);
            //     //       } else {
            //     //         console.log('No pages found in the report');
            //     //       }
            //     //   }).catch((error) => {
            //     //     console.error('Error getting pages:', error);
            //     //   });


            // });

            report.on('rendered', () => {
                console.log('Report rendered');
            });

    
            // Extract data from the report

        }
    }, [embedToken, embedUrl, reportId, setTableData]);

    return  (
        <>
        <div ref={reportRef} className='opacity-[0]' style={{ height: '0px', width: '100%'}} />
        </>
    );
};

export default PowerBIReport;
