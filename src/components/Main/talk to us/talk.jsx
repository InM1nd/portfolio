import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

// import { Canvas } from "@react-three/fiber"
// import { OrbitControls, ContactShadows} from "@react-three/drei"
// import RoundedTablet from "./Tablet.jsx"

import  
{   Main,
    Text,
    Form,
    Wrapper,
    Label,
    Input,
    Textarea,
    Button,
    SuccessMessage,
    Title,
    Container,
    FormTitle,
    Card
  } from "./talk.module.jsx"; 

const About = () => {

    const form = useRef();
    const [isSuccess, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_akm93ow', 'template_0d6shyb', form.current, 'zbsLT_FXTpYzv9OGr')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
            form.current.reset();
          }, 2000);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <Main>
            <Title>Contact.</Title>
            <Container>
            <Card>  
            <Form ref={form} onSubmit={sendEmail}>
                <Wrapper>
                <FormTitle>Write your message</FormTitle>
                <Input type="text" name="user_name" placeholder="Name"  />
                <Input type="email" name="user_email" placeholder="Email" />
                <Textarea name="message" placeholder="Message"/>
                <Button type="submit">Submit</Button>
                </Wrapper>
            </Form>   
            </Card>  
            
            <Card>
              <Text>Thanks a lot!</Text>
            </Card>  

            </Container>
            {isSuccess && (
                <SuccessMessage>
                <p>Message sent successfully!</p> 
                <p>Form will be cleared shortly.</p>
            </SuccessMessage>
            )}
            
        </Main>
        
    )
}

export default About 