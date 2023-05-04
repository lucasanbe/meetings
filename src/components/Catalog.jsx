import { Segmented, Space } from "antd";
import React, { useState } from "react";
import {CardParticipant} from "./CardParticipant";
import {FormsNewParticipant} from "./FormsNewParticipant";
import {ListParticipants} from "./ListParticipants";

export const Catalog = () => {
    const items = [
        {
            key: "1",
            label: `Participantes Internos`,
        },
        {
            key: "2",
            label: `Participantes Externos`,
        },
    ];

    const Participants = () => {
        const [value, setValue] = useState("Participantes Internos");
        const options = items.map((item) => item.label);
        return <Segmented options={options} value={value} onChange={setValue} />;
    };

    return (
        <>
            <FormsNewParticipant />
            <Space style={{ paddingBottom: "10px" }}>
                <Participants />
            </Space>
            <Space>
                <Space
                    style={{
                        width: "350px",
                        height: "350px",
                        boxShadow: "0px 4px 20px rgb(0 0 0 / 10%)",
                        alignItems: "start",
                        borderRadius: "8px",
                        padding: "20px",
                    }}
                >
                    <ListParticipants />
                </Space>
                <Space
                    style={{
                        display: "block",
                        width: "350px",
                        height: "350px",
                        boxShadow: "0px 4px 20px rgb(0 0 0 / 10%)",
                        alignItems: "start",
                        borderRadius: "8px",
                        padding: "20px",
                    }}
                >
                    <CardParticipant />
                </Space>
            </Space>
        </>
    );
};
