import { Badge, Button, Calendar, Drawer, Popconfirm } from "antd";
import locale from "antd/es/date-picker/locale/pt_BR";
import "moment/locale/pt-br";
import "./Styles.css";
import React, { useState } from "react";
import { EditMeeting } from "./EditMeeting";

export const ManagementMode = () => {
    const [showEditComponent, setShowEditComponent] = useState(false);
    const [editingMeeting, setEditingMeeting] = useState(null);
    const listData = {
        "08/04/2023": [
            { type: "warning", content: "This is warning event." },
            { type: "success", content: "This is usual event." },
        ],
        "10/04/2023": [
            { type: "warning", content: "This is warning event." },
            { type: "success", content: "This is usual event." },
            { type: "error", content: "This is error event." },
        ],
        "15/04/2023": [
            { type: "warning", content: "This is warning event" },
            { type: "success", content: "This is very long usual event。。...." },
            { type: "error", content: "This is error event 1." },
            { type: "error", content: "This is error event 2." },
            { type: "error", content: "This is error event 3." },
            { type: "error", content: "This is error event 4." },
        ],
    };

    const handleEdit = (meeting) => {
        setEditingMeeting(meeting);
        setShowEditComponent(true);
    };

    const onClose = () => {
        setShowEditComponent(false);
    };

    const DateCellRender = (value) => {
        const formattedDate = value?.format("DD/MM/YYYY") ?? "";
        const eventData = listData[formattedDate] || [];
        const [open, setOpen] = useState(false);

        const onClose = () => {
            setOpen(false);
        };

        function handleEdit(meeting) {
            setEditingMeeting(meeting);
            setOpen(true);
        }

        return (
            <ul className="eventsSchedule">
                {eventData.map((item) => {
                    return (
                        <React.Fragment key={item.content}>
                            <Popconfirm
                                align="right"
                                title="O que você deseja fazer com esta reunião?"
                                okText="Editar"
                                cancelText="Excluir"
                                onConfirm={() => handleEdit(item)}
                            >
                                <Button align="right" type="dashed">
                                    <li>
                                        <Badge status={item.type} text={item.content} />
                                    </li>
                                </Button>
                            </Popconfirm>
                        </React.Fragment>
                    );
                })}

                <Drawer title="Edição de Reunião" width={380} open={open} onClose={onClose}>
                    <EditMeeting meeting={editingMeeting} onClose={onClose} />
                </Drawer>
            </ul>
        );
    };

    return <Calendar cellRender={DateCellRender} locale={locale} style={{ margin: "5px 50px 50px 50px" }} />;
};
