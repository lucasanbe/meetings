import { useState } from "react";
import { UploadOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import locale from "antd/es/date-picker/locale/pt_BR";
import { Button, Cascader, DatePicker, Form, Input, Radio, Rate, Drawer, Switch, TimePicker, Upload } from "antd";
import Details from "./Details";
import "antd/dist/reset.css";

const optionsCascader = [
    {
        label: "Light",
        value: "light",
        children: new Array(20).fill(null).map((_, index) => ({
            label: `Number ${index}`,
            value: index,
        })),
    },
    {
        label: "Bamboo",
        value: "bamboo",
        children: [
            {
                label: "Little",
                value: "little",
                children: [
                    {
                        label: "Toy Fish",
                        value: "fish",
                    },
                    {
                        label: "Toy Cards",
                        value: "cards",
                    },
                    {
                        label: "Toy Bird",
                        value: "bird",
                    },
                ],
            },
        ],
    },
];

const receiveFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

export const EditMeeting = () => {
    const [open, setOpen] = useState(false);
    const [componentEnabled, setComponentEnabled] = useState(true);

    const handleShowDrawer = () => {
        setOpen(true);
    };

    const handleCloseDrawer = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        handleCloseDrawer();
    };

    const handleSave = () => {
        handleCloseDrawer();
    };

    return (
        <div style={{ paddingBottom: "30px" }}>
            <Form layout="vertical" hideRequiredMark>
                <Form.Item label="Tipo:">
                    <Radio.Group>
                        <Radio value="ata"> Ata </Radio>
                        <Radio value="pauta"> Pauta </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Relevância:">
                    <Rate defaultValue={1} character={({ index }) => index + 1} style={{ fontSize: "18px" }} />
                </Form.Item>
                <Form.Item label="Título">
                    <Input />
                </Form.Item>
                <Form.Item label="Local">
                    <Input />
                </Form.Item>
                <Form.Item label="Data">
                    <DatePicker placeholder="Data" locale={locale} format="DD/MM/YYYY" />
                </Form.Item>
                <Form.Item label="Hora">
                    <TimePicker placeholder="Hora" locale={locale} />
                </Form.Item>
                <Form.Item label="Descrição">
                    <Details />
                </Form.Item>
                <Form.Item label="Participantes">
                    <Cascader
                        style={{
                            width: "100%",
                        }}
                        options={optionsCascader}
                        onChange={(value) => console.log(value)}
                        multiple
                        maxTagCount="responsive"
                    />
                </Form.Item>
                <Form.Item label="Anexos" getValueFromEvent={receiveFile}>
                    <Upload action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Adicionar Arquivos</Button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="Enviar Edição?"
                    tooltip="Envia alerta de modificação da reunião anteriormente criada."
                >
                    <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
                </Form.Item>
            </Form>
            <Button onClick={handleCancel}>Cancelar</Button>
            <Button onClick={handleSave} type="primary">
                Adicionar
            </Button>
        </div>
    );
};
