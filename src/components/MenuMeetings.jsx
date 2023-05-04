import { Tabs } from "antd";
import { Catalog } from "./Catalog";
import { ManagementMode } from "./ManagementMode";
import { FormsNewMeeting } from "./FormsNewMeeting";
import "./Styles.css";

export const MenuMeetings = () => {
    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: "1",
            label: `Nova Reunião`,
            children: (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <FormsNewMeeting />
                </div>
            ),
        },
        {
            key: "2",
            label: `Catálogo de Participantes`,
            children: (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Catalog />
                </div>
            ),
        },
        {
            key: "3",
            label: `Modo Gestão`,

            children: (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <ManagementMode />
                </div>
            ),
        },
    ];

    return <Tabs items={items} onChange={onChange} centered/>;
};
