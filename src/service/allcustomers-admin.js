
// Cart Table if any changes please let me know sujit
export const ProductService = {
    getProductsData() {
        return [
            
            {
                ID: '111121',                
                Name: 'Landside',
                CustomerType: '08/10/2023',
                Company: 'Project 1',
                CustomerGroup: 'Elect. Room',
                Email: 'New',
                Phone:'Awaiting Approval',
                Country:'Open',
                StateProvince:'Open',
                CustomerSince:'Open',
                Website:'Open',
                ConfirmedEmail:'Open',
                AccountCreated:'Open', 
            },
            {
                ID: '111121',                
                Name: 'Landside',
                CustomerType: '08/10/2023',
                Company: 'Project 1',
                CustomerGroup: 'Elect. Room',
                Email: 'New',
                Phone:'Awaiting Approval',
                Country:'Open',
                StateProvince:'Open',
                CustomerSince:'Open',
                Website:'Open',
                ConfirmedEmail:'Open',
                AccountCreated:'Open', 
            }, {
                ID: '111121',                
                Name: 'Landside',
                CustomerType: '08/10/2023',
                Company: 'Project 1',
                CustomerGroup: 'Elect. Room',
                Email: 'New',
                Phone:'Awaiting Approval',
                Country:'Open',
                StateProvince:'Open',
                CustomerSince:'Open',
                Website:'Open',
                ConfirmedEmail:'Open',
                AccountCreated:'Open', 
            }, {
                ID: '111121',                
                Name: 'Landside',
                CustomerType: '08/10/2023',
                Company: 'Project 1',
                CustomerGroup: 'Elect. Room',
                Email: 'New',
                Phone:'Awaiting Approval',
                Country:'Open',
                StateProvince:'Open',
                CustomerSince:'Open',
                Website:'Open',
                ConfirmedEmail:'Open',
                AccountCreated:'Open', 
            }, {
                ID: '111121',                
                Name: 'Landside',
                CustomerType: '08/10/2023',
                Company: 'Project 1',
                CustomerGroup: 'Elect. Room',
                Email: 'New',
                Phone:'Awaiting Approval',
                Country:'Open',
                StateProvince:'Open',
                CustomerSince:'Open',
                Website:'Open',
                ConfirmedEmail:'Open',
                AccountCreated:'Open', 
            }, {
                ID: '111121',                
                Name: 'Landside',
                CustomerType: '08/10/2023',
                Company: 'Project 1',
                CustomerGroup: 'Elect. Room',
                Email: 'New',
                Phone:'Awaiting Approval',
                Country:'Open',
                StateProvince:'Open',
                CustomerSince:'Open',
                Website:'Open',
                ConfirmedEmail:'Open',
                AccountCreated:'Open', 
            }, {
                ID: '111121',                
                Name: 'Landside',
                CustomerType: '08/10/2023',
                Company: 'Project 1',
                CustomerGroup: 'Elect. Room',
                Email: 'New',
                Phone:'Awaiting Approval',
                Country:'Open',
                StateProvince:'Open',
                CustomerSince:'Open',
                Website:'Open',
                ConfirmedEmail:'Open',
                AccountCreated:'Open', 
            }, {
                ID: '111121',                
                Name: 'Landside',
                CustomerType: '08/10/2023',
                Company: 'Project 1',
                CustomerGroup: 'Elect. Room',
                Email: 'New',
                Phone:'Awaiting Approval',
                Country:'Open',
                StateProvince:'Open',
                CustomerSince:'Open',
                Website:'Open',
                ConfirmedEmail:'Open',
                AccountCreated:'Open', 
            }, {
                ID: '111121',                
                Name: 'Landside',
                CustomerType: '08/10/2023',
                Company: 'Project 1',
                CustomerGroup: 'Elect. Room',
                Email: 'New',
                Phone:'Awaiting Approval',
                Country:'Open',
                StateProvince:'Open',
                CustomerSince:'Open',
                Website:'Open',
                ConfirmedEmail:'Open',
                AccountCreated:'Open', 
            }, {
                ID: '111121',                
                Name: 'Landside',
                CustomerType: '08/10/2023',
                Company: 'Project 1',
                CustomerGroup: 'Elect. Room',
                Email: 'New',
                Phone:'Awaiting Approval',
                Country:'Open',
                StateProvince:'Open',
                CustomerSince:'Open',
                Website:'Open',
                ConfirmedEmail:'Open',
                AccountCreated:'Open', 
            },
            
           
                      
           
        ];
    },


    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 3));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

