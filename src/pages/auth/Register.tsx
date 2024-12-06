import {Col, Container, Form, Image, Row} from "react-bootstrap"
import RegisterImage from "../../assets/images/image/register.jpg";
import FormBtn from "../../services/button/FormBtn";
import * as Yup from "yup";
import {useFormik} from "formik";
import FormInput from "../../services/form/FormInput";
import {Link, useNavigate} from "react-router-dom";
import CustomFileUpload from "../../services/media/CustomFileUpload";
import {useAlert} from "../../services/alert/alertHelper";

const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, "Min is 2").max(100, "Max is 100").required("Full name is required"),
    username: Yup.string().min(2, "Min is 2").max(100, "Max is 100").required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required")
})

const Register = () => {
    const navigate = useNavigate();
    const {alertSuccess} = useAlert();

    const formik = useFormik({
        initialValues: {
            name: "",
            username: "",
            email: "",
            password: ""
        },
        validationSchema,
        validateOnMount: true,
        onSubmit: (values) => {
            console.log(values)
            alertSuccess({
                title: "Register successfully",
                onSuccess: () => navigate("/")
            });
        }
    })

    return <div className="w-100 vh-100 py-4 overflow-auto py-lg-0 align-content-start align-content-lg-center">
        <Container fluid="sm">
            <Row xs={1} lg={2} className="g-0 align-items-center shadow rounded-4 overflow-hidden">
                <Col className="d-none d-lg-block">
                    <Image src={RegisterImage} className="w-100 h-100"/>
                </Col>
                <Col>
                    <Form onSubmit={formik.handleSubmit} className="position-relative p-4 p-lg-5">
                        <h3 className="fw-bold text-center text-lg-start text-primary mb-3">SIGN UP</h3>
                        <FormInput placeholder="Enter full name" label="Full Name" type="text" name="name"
                                   formik={formik} isRequired/>
                        <FormInput placeholder="Enter username" label="Username" type="text" name="username"
                                   formik={formik} isRequired/>
                        <FormInput placeholder="Enter email" label="Email" type="email" name="email" formik={formik}
                                   isRequired/>
                        <FormInput placeholder="Enter password" label="Password" type="password" name="password"
                                   formik={formik} isRequired/>
                        <CustomFileUpload fileSize={5} label="Profile"/>
                        <div className="mt-5 w-100 d-flex gap-3 flex-wrap justify-content-between align-items-center">
                            <Link to="/login">Login?</Link>
                            <FormBtn title="Register" type="submit" disabled={!formik.isValid}/>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Register