import React from "react";
import { Tree } from "antd";

const dataParticipants = [
    {
        title: "Recursos Humanos",
        key: "0",
        children: [
            {
                title: "Ianca Sá",
                key: "0-0",
            },
            {
                title: "Danielle Resplandes",
                key: "0-1",
            },
        ],
    },
];
export const ListParticipants = () => (
    <Tree checkable defaultSelectedKeys={["0-1"]} defaultExpandAll treeData={dataParticipants} blockNode />
);
