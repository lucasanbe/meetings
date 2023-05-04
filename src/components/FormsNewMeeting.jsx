import { UploadOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import locale from "antd/es/date-picker/locale/pt_BR";
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    Popconfirm,
    Radio,
    Rate,
    Space,
    Switch,
    TimePicker,
    Upload,
} from "antd";
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

const onChange = (value) => {
    console.log(value);
};

const receiveFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

export const FormsNewMeeting = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Form values:", values);
    };

    const initialValues = {
        relevance: 1,
    };
    
    return (
        <>
            <Form
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 18 }}
                style={{ maxWidth: "500px" }}
                labelAlign="center"
                layout="horizontal"
                onFinish={onFinish}
                initialValues={initialValues}
            >
                <Form.Item
                    label="Tipo:"
                    name="type"
                    rules={[{ required: true, message: "Por favor, selecione o tipo da reunião." }]}
                >
                    <Radio.Group>
                        <Radio value="ata">Ata</Radio>
                        <Radio value="pauta">Pauta</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="Relevância:"
                    name="relevance"
                    rules={[{ required: true, message: "Por favor, selecione a relevância da reunião." }]}
                >
                    <Rate initialValue={1} character={({ index }) => index + 1} style={{ fontSize: "18px" }} />
                </Form.Item>
                <Form.Item
                    label="Título"
                    name="title"
                    rules={[{ required: true, message: "Por favor, informe o título da reunião." }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Local"
                    name="location"
                    rules={[{ required: true, message: "Por favor, informe o local da reunião." }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Data"
                    name="date"
                    rules={[{ required: true, message: "Por favor, informe a data da reunião." }]}
                >
                    <DatePicker placeholder="Data" locale={locale} format="DD/MM/YYYY" />
                </Form.Item>
                <Form.Item
                    label="Hora"
                    name="time"
                    rules={[{ required: true, message: "Por favor, informe a hora da reunião." }]}
                >
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
                        onChange={onChange}
                        multiple
                        maxTagCount="responsive"
                    />
                </Form.Item>
                <Form.Item label="Anexos" getValueFromEvent={receiveFile}>
                    <Upload action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Adicionar Arquivos</Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="Enviar" tooltip="Envia cópia da reunião criada para os participantes.">
                    <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
                </Form.Item>
            </Form>
            <Space align="right">
                <Popconfirm align="right" title="Deseja seguir para a próxima etapa?" okText="Sim" cancelText="Não">
                    <Button align="right" type="primary">
                        Criar Reunião
                    </Button>
                </Popconfirm>
            </Space>
        </>
    );
};
