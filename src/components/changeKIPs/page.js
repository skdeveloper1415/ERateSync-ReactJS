"use client";
import { useState, useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Checkbox } from 'primereact/checkbox';
import { TreeSelect } from 'primereact/treeselect';
import { ScrollPanel } from "primereact/scrollpanel";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";


export default function ChangeKIPs(props) {
    const { visible, onHide } = props;
    const [checked, setChecked] = useState(false);

    const [node, setNodes] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    
const nodes=[
    {
        key: '0',
        label: 'Status',
        data: 'Documents Folder',
        icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
        children: [
            {
                key: '0-0',
                label: 'Option 1',
                data: 'Work Folder',
                icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
            },
            {
                key: '0-1',
                label: 'Option 2',
                data: 'Home Folder',
                icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
            },
            {
                key: '0-2',
                label: 'Option 3',
                data: 'Home Folder',
                icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
            }
        ]
    },
    {
        key: '1',
        label: 'Type',
        data: 'Documents Folder',
        icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
        children: [
            {
                key: '1-0',
                label: 'Option 1',
                data: 'Work Folder',
                icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
            },
            {
                key: '1-1',
                label: 'Option 2',
                data: 'Home Folder',
                icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
            },
            {
                key: '1-2',
                label: 'Option 3',
                data: 'Home Folder',
                icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
            }
        ]
    },
    {
        key: '2',
        label: 'Option 3',
        data: 'Documents Folder',
        icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
        children: [
            {
                key: '2-0',
                label: 'Option 1',
                data: 'Work Folder',
                icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
            },
            {
                key: '2-1',
                label: 'Option 2',
                data: 'Home Folder',
                icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
            },
            {
                key: '2-2',
                label: 'Option 3',
                data: 'Home Folder',
                icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
            }
        ]
    },
    {
        key: '3',
        label: 'Option 4',
        data: 'Documents Folder',
        icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
        children: [
            {
                key: '3-0',
                label: 'Option 1',
                data: 'Work Folder',
                icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
            },
            {
                key: '3-1',
                label: 'Option 2',
                data: 'Home Folder',
                icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
            },
            {
                key: '3-2',
                label: 'Option 3',
                data: 'Home Folder',
                icon: <div> <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>,
            }
        ]
    },
]

    return (
        <>
            <div>
                <Sidebar
                    visible={visible}
                    onHide={onHide}
                    position="right"
                    className="custmSidebar custside w-[50%] 3xl:w-[50%] xl:w-[50%] 2xl:w-[50%] rounded-[10px] rounded-br-none bg-white"
                    blockScroll={true}
                >
                    <div className=" bg-[#fff] border border-b-[#E5E7EB] dark:bg-[#111928] p-[24px] xl:p-[24px] 3xl:p-[1.25vw] rounded-tl-[10px] sticky top-0 z-10">
                        <div className="flex gap-3 xl:gap-2.5">
                            <div>
                                <div className="text-[#374151] dark:text-[#F2F2F5] text-[22px] xl:text-[22px] 3xl:text-[1.146vw] font-semibold leading-none">
                                    Change KPIs ( Min 3, Max 5)
                                </div>
                            </div>
                        </div>
                    </div>
                    <ScrollPanel className="w-full h-[500px] xl:h-[500px] 2xl:h-[650px] 3xl:h-[25.125vw] gap-[15px]">
                    <div className=" gap-4 bg-white px-[20px] xl:px-[20px] 3xl:px-[1.042vw] pt-[20px] xl:pt-[20px] 3xl:pt-[1.042vw]">
                        <div className="grid grid-cols-3 gap-3">
                            <div className="border custcheck border-[#E5E7EB] rounded-lg">
                                <div className="flex items-center gap-2 border-b border-[#C9D3DB] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]">
                                    <div className="mt-1"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                    <div className="text-[#19212A] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-semibold">Forms 470 Status</div>
                                </div>

                                <div className="flex flex-col gap-2 p-[16px] xl:p-[16px] 3xl:p-[0.833vw] custcheck">
                                    <div className="text-[#374151] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium">Select Split Parameter</div>
                                        <div className="card flex justify-content-center custtree custcheck1">
                                            <TreeSelect
                                                value={selectedNodeKeys}
                                                onChange={(e) => setSelectedNodeKeys(e.value)}
                                                options={nodes}
                                                metaKeySelection={false}
                                                className="w-full"
                                                panelClassName="custchecktree"
                                                selectionMode="checkbox"
                                                placeholder="Status"
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="border custcheck border-[#E5E7EB] rounded-lg ">
                                <div className="flex items-center gap-2 border-b border-[#C9D3DB] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]">
                                    <div className="mt-1"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                    <div className="text-[#19212A] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-semibold">Certified Forms 470</div>
                                </div>

                                <div className="flex flex-col gap-2 p-[16px] xl:p-[16px] 3xl:p-[0.833vw] custcheck">
                                    <div className="text-[#374151] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium">Select Split Parameter</div>
                                        <div className="card flex justify-content-center custtree custcheck1">
                                            <TreeSelect
                                                value={selectedNodeKeys}
                                                onChange={(e) => setSelectedNodeKeys(e.value)}
                                                options={nodes}
                                                metaKeySelection={false}
                                                className="w-full"
                                                panelClassName="custchecktree"
                                                selectionMode="checkbox"
                                                placeholder="Status"
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="border custcheck border-[#E5E7EB] rounded-lg ">
                                <div className="flex items-center gap-2 border-b border-[#C9D3DB] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]">
                                    <div className="mt-1"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                    <div className="text-[#19212A] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-semibold">486 Status</div>
                                </div>

                                <div className="flex flex-col gap-2 p-[16px] xl:p-[16px] 3xl:p-[0.833vw] custcheck">
                                    <div className="text-[#374151] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium">Select Split Parameter</div>
                                        <div className="card flex justify-content-center custtree custcheck1">
                                            <TreeSelect
                                                value={selectedNodeKeys}
                                                onChange={(e) => setSelectedNodeKeys(e.value)}
                                                options={nodes}
                                                metaKeySelection={false}
                                                className="w-full"
                                                panelClassName="custchecktree"
                                                selectionMode="checkbox"
                                                placeholder="Status"
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="border custcheck border-[#E5E7EB] rounded-lg ">
                                <div className="flex items-center gap-2 border-b border-[#C9D3DB] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]">
                                    <div className="mt-1"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                    <div className="text-[#19212A] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-semibold">Value/Entity</div>
                                </div>

                                <div className="flex flex-col gap-2 p-[16px] xl:p-[16px] 3xl:p-[0.833vw] custcheck">
                                    <div className="text-[#374151] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium">Select Split Parameter</div>
                                        <div className="card flex justify-content-center custtree custcheck1">
                                            <TreeSelect
                                                value={selectedNodeKeys}
                                                onChange={(e) => setSelectedNodeKeys(e.value)}
                                                options={nodes}
                                                metaKeySelection={false}
                                                className="w-full"
                                                panelClassName="custchecktree"
                                                selectionMode="checkbox"
                                                placeholder="Status"
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="border custcheck border-[#E5E7EB] rounded-lg ">
                                <div className="flex items-center gap-2 border-b border-[#C9D3DB] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]">
                                    <div className="mt-1"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                    <div className="text-[#19212A] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-semibold">Alignment Score</div>
                                </div>

                                <div className="flex flex-col gap-2 p-[16px] xl:p-[16px] 3xl:p-[0.833vw] custcheck">
                                    <div className="text-[#374151] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium">Select Split Parameter</div>
                                        <div className="card flex justify-content-center custtree custcheck1">
                                            <TreeSelect
                                                value={selectedNodeKeys}
                                                onChange={(e) => setSelectedNodeKeys(e.value)}
                                                options={nodes}
                                                metaKeySelection={false}
                                                className="w-full"
                                                panelClassName="custchecktree"
                                                selectionMode="checkbox"
                                                placeholder="Status"
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="border custcheck border-[#E5E7EB] rounded-lg ">
                                <div className="flex items-center gap-2 border-b border-[#C9D3DB] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]">
                                    <div className="mt-1"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                    <div className="text-[#19212A] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-semibold">KPI 1</div>
                                </div>

                                <div className="flex flex-col gap-2 p-[16px] xl:p-[16px] 3xl:p-[0.833vw] custcheck">
                                    <div className="text-[#374151] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium">Select Split Parameter</div>
                                        <div className="card flex justify-content-center custtree custcheck1">
                                            <TreeSelect
                                                value={selectedNodeKeys}
                                                onChange={(e) => setSelectedNodeKeys(e.value)}
                                                options={nodes}
                                                metaKeySelection={false}
                                                className="w-full"
                                                panelClassName="custchecktree"
                                                selectionMode="checkbox"
                                                placeholder="Status"
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="border custcheck border-[#E5E7EB] rounded-lg ">
                                <div className="flex items-center gap-2 border-b border-[#C9D3DB] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]">
                                    <div className="mt-1"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                    <div className="text-[#19212A] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-semibold">KPI 2</div>
                                </div>

                                <div className="flex flex-col gap-2 p-[16px] xl:p-[16px] 3xl:p-[0.833vw] custcheck">
                                    <div className="text-[#374151] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium">Select Split Parameter</div>
                                        <div className="card flex justify-content-center custtree custcheck1">
                                            <TreeSelect
                                                value={selectedNodeKeys}
                                                onChange={(e) => setSelectedNodeKeys(e.value)}
                                                options={nodes}
                                                metaKeySelection={false}
                                                className="w-full"
                                                panelClassName="custchecktree"
                                                selectionMode="checkbox"
                                                placeholder="Status"
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="border custcheck border-[#E5E7EB] rounded-lg ">
                                <div className="flex items-center gap-2 border-b border-[#C9D3DB] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]">
                                    <div className="mt-1"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                    <div className="text-[#19212A] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-semibold">KPI 3</div>
                                </div>

                                <div className="flex flex-col gap-2 p-[16px] xl:p-[16px] 3xl:p-[0.833vw] custcheck">
                                    <div className="text-[#374151] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium">Select Split Parameter</div>
                                        <div className="card flex justify-content-center custtree custcheck1">
                                            <TreeSelect
                                                value={selectedNodeKeys}
                                                onChange={(e) => setSelectedNodeKeys(e.value)}
                                                options={nodes}
                                                metaKeySelection={false}
                                                className="w-full"
                                                panelClassName="custchecktree"
                                                selectionMode="checkbox"
                                                placeholder="Status"
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="border custcheck border-[#E5E7EB] rounded-lg ">
                                <div className="flex items-center gap-2 border-b border-[#C9D3DB] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]">
                                    <div className="mt-1"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                    <div className="text-[#19212A] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-semibold">KPI 4</div>
                                </div>

                                <div className="flex flex-col gap-2 p-[16px] xl:p-[16px] 3xl:p-[0.833vw] custcheck">
                                    <div className="text-[#374151] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium">Select Split Parameter</div>
                                        <div className="card flex justify-content-center custtree custcheck1">
                                            <TreeSelect
                                                value={selectedNodeKeys}
                                                onChange={(e) => setSelectedNodeKeys(e.value)}
                                                options={nodes}
                                                metaKeySelection={false}
                                                className="w-full"
                                                panelClassName="custchecktree"
                                                selectionMode="checkbox"
                                                placeholder="Status"
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="border custcheck border-[#E5E7EB] rounded-lg ">
                                <div className="flex items-center gap-2 border-b border-[#C9D3DB] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]">
                                    <div className="mt-1"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                    <div className="text-[#19212A] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-semibold">KPI 5</div>
                                </div>

                                <div className="flex flex-col gap-2 p-[16px] xl:p-[16px] 3xl:p-[0.833vw] custcheck">
                                    <div className="text-[#374151] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium">Select Split Parameter</div>
                                        <div className="card flex justify-content-center custtree custcheck1">
                                            <TreeSelect
                                                value={selectedNodeKeys}
                                                onChange={(e) => setSelectedNodeKeys(e.value)}
                                                options={nodes}
                                                metaKeySelection={false}
                                                className="w-full"
                                                panelClassName="custchecktree"
                                                selectionMode="checkbox"
                                                placeholder="Status"
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="border custcheck border-[#E5E7EB] rounded-lg ">
                                <div className="flex items-center gap-2 border-b border-[#C9D3DB] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]">
                                    <div className="mt-1"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                    <div className="text-[#19212A] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-semibold">KPI 6</div>
                                </div>

                                <div className="flex flex-col gap-2 p-[16px] xl:p-[16px] 3xl:p-[0.833vw] custcheck">
                                    <div className="text-[#374151] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium">Select Split Parameter</div>
                                        <div className="card flex justify-content-center custtree custcheck1">
                                            <TreeSelect
                                                value={selectedNodeKeys}
                                                onChange={(e) => setSelectedNodeKeys(e.value)}
                                                options={nodes}
                                                metaKeySelection={false}
                                                className="w-full"
                                                panelClassName="custchecktree"
                                                selectionMode="checkbox"
                                                placeholder="Status"
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="border custcheck border-[#E5E7EB] rounded-lg ">
                                <div className="flex items-center gap-2 border-b border-[#C9D3DB] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]">
                                    <div className="mt-1"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                    <div className="text-[#19212A] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-semibold">KPI 7</div>
                                </div>

                                <div className="flex flex-col gap-2 p-[16px] xl:p-[16px] 3xl:p-[0.833vw] custcheck">
                                    <div className="text-[#374151] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium">Select Split Parameter</div>
                                        <div className="card flex justify-content-center custtree custcheck1">
                                            <TreeSelect
                                                value={selectedNodeKeys}
                                                onChange={(e) => setSelectedNodeKeys(e.value)}
                                                options={nodes}
                                                metaKeySelection={false}
                                                className="w-full"
                                                panelClassName="custchecktree"
                                                selectionMode="checkbox"
                                                placeholder="Status"
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="border custcheck border-[#E5E7EB] rounded-lg ">
                                <div className="flex items-center gap-2 border-b border-[#C9D3DB] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]">
                                    <div className="mt-1"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                    <div className="text-[#19212A] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-semibold">KPI 8</div>
                                </div>

                                <div className="flex flex-col gap-2 p-[16px] xl:p-[16px] 3xl:p-[0.833vw] custcheck">
                                    <div className="text-[#374151] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium">Select Split Parameter</div>
                                        <div className="card flex justify-content-center custtree custcheck1">
                                            <TreeSelect
                                                value={selectedNodeKeys}
                                                onChange={(e) => setSelectedNodeKeys(e.value)}
                                                options={nodes}
                                                metaKeySelection={false}
                                                className="w-full"
                                                panelClassName="custchecktree"
                                                selectionMode="checkbox"
                                                placeholder="Status"
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="border custcheck border-[#E5E7EB] rounded-lg ">
                                <div className="flex items-center gap-2 border-b border-[#C9D3DB] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]">
                                    <div className="mt-1"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                    <div className="text-[#19212A] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-semibold">KPI 9</div>
                                </div>

                                <div className="flex flex-col gap-2 p-[16px] xl:p-[16px] 3xl:p-[0.833vw] custcheck">
                                    <div className="text-[#374151] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium">Select Split Parameter</div>
                                        <div className="card flex justify-content-center custtree custcheck1">
                                            <TreeSelect
                                                value={selectedNodeKeys}
                                                onChange={(e) => setSelectedNodeKeys(e.value)}
                                                options={nodes}
                                                metaKeySelection={false}
                                                className="w-full"
                                                panelClassName="custchecktree"
                                                selectionMode="checkbox"
                                                placeholder="Status"
                                            />
                                        </div>
                                </div>
                            </div>

                            <div className="border custcheck border-[#E5E7EB] rounded-lg ">
                                <div className="flex items-center gap-2 border-b border-[#C9D3DB] px-[16px] xl:px-[16px] 3xl:px-[0.833vw] py-[8px] xl:py-[8px] 3xl:py-[0.417vw]">
                                    <div className="mt-1"><Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox></div>
                                    <div className="text-[#19212A] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-semibold">KPI 10</div>
                                </div>

                                <div className="flex flex-col gap-2 p-[16px] xl:p-[16px] 3xl:p-[0.833vw] custcheck">
                                    <div className="text-[#374151] text-[14px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[0.833vw] font-medium">Select Split Parameter</div>
                                        <div className="card flex justify-content-center custtree custcheck1">
                                            <TreeSelect
                                                value={selectedNodeKeys}
                                                onChange={(e) => setSelectedNodeKeys(e.value)}
                                                options={nodes}
                                                metaKeySelection={false}
                                                className="w-full"
                                                panelClassName="custchecktree"
                                                selectionMode="checkbox"
                                                placeholder="Status"
                                            />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ScrollPanel>
                    <div className="absolute bottom-0 right-0 left-0">
                        <div className=" bg-[#fff] p-[16px] xl:p-[16px] 3xl:p-[0.833vw] flex items-center justify-end gap-4 rounded-bl-[10px]">
                            <div
                                onClick={onHide}
                                className="dark:bg-[#111928] cursor-pointer rounded-md py-[8px] xl:py-[8px] 3xl:py-[0.417vw] px-4 xl:px-[14px] 3xl:px-[0.833vw] border border-[#C9D3DB] dark:border-[#374151] text-[#2C363F] dark:text-[#E0E3E9] text-[16px] xl:text-[15px] 3xl:text-[0.833vw] font-normal "
                            >
                                Cancel
                            </div>
                            <div
                                className="bg-[#1570EF] cursor-pointer dark:bg-[#1570EF] rounded-md py-[8px] xl:py-[8px] 3xl:py-[0.417vw] px-4 xl:px-[14px] 3xl:px-[0.833vw] border border-[#1570EF] text-white text-[16px] xl:text-[15px] 3xl:text-[0.833vw] font-normal"
                            >
                                Apply
                            </div>
                        </div>
                    </div>
                </Sidebar>
            </div>
        </>
    );
}
