import { useState } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Form, Input, Switch } from "antd";

export const EditParticipant = () => {
    const [open, setOpen] = useState(false);
    const [componentEnabled, setComponentEnabled] = useState(true);

    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    const handleAddParticipant = () => {
        // Lógica para adicionar participante
        onClose();
    };

    const initialValues = {
        relevance: "MEDEIROS",
    };


    return (
        <div style={{ paddingTop: "15px", paddingBottom: "30px" }}>
            <Form layout="vertical" hideRequiredMark initialValues={initialValues}>
                <Form.Item
                    label="Nome:"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Digite o nome do participante",
                        },
                    ]}
                >
                    <Input placeholder="Ex: Francisco Silva" />
                </Form.Item>
                <Form.Item
                    label="E-mail:"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Digite o e-mail do participante",
                        },
                    ]}
                >
                    <Input placeholder="Ex: francisco@gmail.com" />
                </Form.Item>
                <Form.Item
                    label="Área:"
                    name="area"
                    rules={[
                        {
                            required: true,
                            message: "Digite a área do participante",
                        },
                    ]}
                >
                    <Input placeholder="Ex: Recursos Humanos" />
                </Form.Item>
                <Form.Item
                    label="Cargo:"
                    name="role"
                    rules={[
                        {
                            required: true,
                            message: "Digite o cargo do participante",
                        },
                    ]}
                >
                    <Input placeholder="Ex: Analista de Recursos Humanos" />
                </Form.Item>
                <Form.Item
                    label="Empresa:"
                    name="company"
                    initialValue="MEDEIROS"
                    rules={[
                        {
                            required: true,
                            message: "Digite a empresa do participante",
                        },
                    ]}
                >
                    <Input disabled={componentEnabled} />
                </Form.Item>
                <Form.Item label="Externo?" name="external" tooltip="É um participante externo?">
                    <Switch
                        checked={!componentEnabled}
                        onChange={(e) => setComponentEnabled(!componentEnabled)}
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                    />
                </Form.Item>
            </Form>
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={handleAddParticipant} type="primary">
                Adicionar
            </Button>
        </div>
    );
};
