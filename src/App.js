
import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { FaUserCheck, FaBolt, FaCamera } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header text-white text-center">
        <Container>
          <h1>Human 3DGS Service</h1>
          <p className="lead">未来のあなたを、その手に。最高の3Dリアリティを体験せよ。</p>
          <Button href="#contact" variant="primary" size="lg" className="m-2">今すぐ予約する</Button>
        </Container>
      </header>

      {/* Main Content */}
      <main>
        {/* Service Section */}
        <section id="service" className="section">
          <Container>
            <h2 className="section-title">Our Features</h2>
            <Row>
              <Col md={4} className="text-center mb-4">
                <FaUserCheck size={50} className="mb-3 text-primary" />
                <h3>超高精細</h3>
                <p>専用スタジオと最新鋭機材で、毛穴や衣服の質感まで忠実に再現します。</p>
              </Col>
              <Col md={4} className="text-center mb-4">
                <FaBolt size={50} className="mb-3 text-primary" />
                <h3>即時生成</h3>
                <p>撮影後、わずか数分で3Dモデルを生成。その場で確認・ダウンロード可能です。</p>
              </Col>
              <Col md={4} className="text-center mb-4">
                <FaCamera size={50} className="mb-3 text-primary" />
                <h3>プロによる撮影</h3>
                <p>専門スタッフが最適なポージングやライティングをサポートします。</p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* How to Use Section */}
        <section id="how-to-use" className="bg-dark section">
          <Container>
            <h2 className="section-title">Flow</h2>
            <Row className="align-items-center">
              <Col md={6}>
                <img src="https://via.placeholder.com/500x300/0d6efd/ffffff?text=Studio+Shooting" alt="Studio Shooting" className="img-fluid" />
              </Col>
              <Col md={6}>
                <h4>簡単3ステップ</h4>
                <p>1. WEBフォームからご希望の日時を予約</p>
                <p>2. 当日、スタジオにて専門スタッフが撮影</p>
                <p>3. その場で3DGSモデルをお渡し</p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Use Case Section */}
        <section id="use-case" className="section">
          <Container>
            <h2 className="section-title">Use Cases</h2>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200/0d6efd/ffffff?text=Fashion" />
                  <Card.Body>
                    <Card.Title>バーチャルファッション</Card.Title>
                    <Card.Text>
                      あなたのアバターが最新のファッションを纏う。
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200/0d6efd/ffffff?text=Game/VRSNS" />
                  <Card.Body>
                    <Card.Title>ゲーム・VRSNS</Card.Title>
                    <Card.Text>
                      究極の没入感。あなた自身が主人公になる。
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200/0d6efd/ffffff?text=Healthcare" />
                  <Card.Body>
                    <Card.Title>デジタルヘルス</Card.Title>
                    <Card.Text>
                      時系列で体の変化を記録し、健康管理に役立てる。
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-dark section">
          <Container className="text-center">
            <h2 className="section-title">Campaign Price</h2>
            <Card style={{ maxWidth: '400px', margin: 'auto' }}>
              <Card.Header as="h3">お試しプラン</Card.Header>
              <Card.Body>
                <Card.Title className="display-4">¥1,000</Card.Title>
                <Card.Text>
                  期間限定の特別価格。全身の3DGSモデル作成を体験いただけます。
                </Card.Text>
                <Button href="#contact" variant="primary" size="lg">今すぐ予約する</Button>
              </Card.Body>
            </Card>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <Container>
            <h2 className="section-title">Contact & Reservation</h2>
            <Row className="justify-content-center">
              <Col md={8}>
                <p className="text-center mb-4">ご予約、その他お問い合わせは以下のフォームからご連絡ください。</p>
                <Form action="https://formspree.io/f/mrblzlkn" method="POST">
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>お名前</Form.Label>
                    <Form.Control type="text" name="name" placeholder="氏名" required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>メールアドレス</Form.Label>
                    <Form.Control type="email" name="_replyto" placeholder="メールアドレス" required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label>ご希望の日時</Form.Label>
                    <Form.Control type="datetime-local" name="datetime" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>メッセージ</Form.Label>
                    <Form.Control as="textarea" name="message" rows={5} placeholder="ご質問・ご要望など" required />
                  </Form.Group>
                  <div className="d-grid">
                    <Button variant="primary" type="submit" size="lg">
                      送信
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-4">
        <Container>
          <p>&copy; 2025 Human 3DGS Service. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
