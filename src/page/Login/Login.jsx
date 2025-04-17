import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault(); // 페이지 리로드 방지
        setAuthenticate(true);
        navigate('/');
    };

    return (
        // Container에 fluid를 추가하여 화면의 전체 너비를 사용하도록 설정
        <Container fluid className="d-flex justify-content-center" style={{ marginTop: '5rem' }}>
            <Row className="justify-content-center w-100">
                {/* 반응형 그리드에서 12칸을 기본으로 사용하고, 크기마다 적절한 너비 사용 */}
                <Col xs={12} sm={10} md={8} lg={6} xl={4}>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <h4 className="text-center mb-4">환영합니다</h4>
                            <Form onSubmit={loginUser}>
                                <Form.Group controlId="formId">
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="이메일 주소"
                                        name="id"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPassword" className="mt-3">
                                    <Form.Label></Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="비밀번호"
                                        name="password"
                                        required
                                    />
                                </Form.Group>   
                                <div>비밀번호를 잊으셨나요?</div>

                                <Button variant="danger" type="submit" className="w-100 mt-4">
                                    로그인
                                </Button>
                                <div className="text-center mt-3">
                                    계정이 없으신가요?
                                </div>
                                <div>회원가입</div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
