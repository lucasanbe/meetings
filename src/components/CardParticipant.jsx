import { Avatar, Button, Drawer, Space, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { EditParticipant } from "./EditParticipant";
import React, { useState } from "react";
import "./Styles.css";

function stringToColor(string, index) {
  const hash = Array.from(string).reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
  const indexHash = (index + 1) * 1000000;
  return "#" + (indexHash + (hash & 0xffffff)).toString(16).slice(1, 7);
}

function getInitials(name) {
  const names = name.trim().split(/\s+/);
  const firstInitial = names[0].charAt(0);
  const lastInitial = names[names.length - 1].charAt(0);
  return (firstInitial + lastInitial).toUpperCase();
}

export const CardParticipant = () => {
  const names = ["Ianca Sá", "Danielle Resplandes"];
  const [open, setOpen] = useState(false);
  const [editingParticipant, setEditingParticipant] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    setOpen(true);
  };

  return (
    <>
      {names.map((name, index) => (
        <Space
          key={name}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: "8px",
            width: "100%",
            boxShadow: "0px 2px 8px 5px rgb(0 0 0 / 3%)",
            paddingLeft: "10px",
            margin: "0px 0px 10px 0px",
            position: "relative",
          }}
        >
          <Avatar size="large" style={{ backgroundColor: stringToColor(getInitials(name), index) }}>
            {getInitials(name)}
          </Avatar>
          <Space size={0} style={{ flexDirection: "column", alignItems: "start" }}>
            <Typography>Nome: {name}</Typography>
            <Typography>Setor:</Typography>
            <Typography>Cargo:</Typography>
            <Typography>Empresa:</Typography>
          </Space>
          <Space style={{ position: "absolute", top: 2, right: 3 }}>
            <Button
              style={{ color: "#1677ff" }}
              size="small"
              type="none"
              icon={<EditOutlined />}
              onClick={() => {
                setEditingParticipant(name);
                handleEdit();
              }}
            />
            <Drawer title="Edição de Participante" width={380} open={open} onClose={handleClose}>
              <EditParticipant meeting={editingParticipant} />
            </Drawer>
          </Space>
          <Space style={{ position: "absolute", bottom: 2, right: 3 }}>
            <Button style={{ color: "red" }} size="small" type="none" icon={<DeleteOutlined />} />
          </Space>
        </Space>
      ))}
    </>
  );
};
