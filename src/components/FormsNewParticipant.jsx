import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input, Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

export const FormsNewParticipant = () => {
    const [open, setOpen] = useState(false);
    const [componentEnabled, setComponentEnabled] = useState(true);

    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    const onFinish = (values) => {
        console.log(values);
        onClose();
    };

    const initialValues = {
        relevance: "MEDEIROS",
    };

    return (
        <div style={{ paddingTop: "15px", paddingBottom: "30px" }}>
            <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                Novo Participante
            </Button>
            <Drawer
                title={"Novo participante"}
                width={380}
                onClose={onClose}
                open={open}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <Form layout="vertical" onFinish={onFinish} hideRequiredMark initialValues={initialValues}>
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
                        name="jobTitle"
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
                    <Form.Item label="Externo?" name="isExternal" tooltip="É um participante externo?">
                        <Switch
                            checked={!componentEnabled}
                            onChange={() => setComponentEnabled(!componentEnabled)}
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                        />
                    </Form.Item>
                    <Button onClick={onClose}>Cancelar</Button>
                    <Button htmlType="submit" type="primary">
                        Adicionar
                    </Button>
                </Form>
            </Drawer>
        </div>
    );
};
