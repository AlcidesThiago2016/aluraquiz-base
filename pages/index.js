import styled from 'styled-components';
import db from '../db.json';
import React from 'react';
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head';
import QuizLogo from '../src/components/QuizLogo';
import { useRouter } from 'next/router';

//const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
// background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
       <QuizContainer>
         <QuizLogo />
         <Widget>
            <Widget.Header>
              <h1>The Coffee Programing</h1>
              </Widget.Header>
              <Widget.Content>
                  <form onSubmit={function (infosDoEvento) {
                    infosDoEvento.preventDefault();
                    router.push(`/quiz?name=${name}`);
                    console.log('Fazendo uma submissão por meio do react');

                    // router manda para a próxima página
                  }
                }
                >
                      <input 
                        onChange={function ( infosDoEvento ){
                          console.log(infosDoEvento.target.value);
                          // State
                          // name = infosDoEvento.target.value;
                          setName(infosDoEvento.target.value);
                        }}
                      
                      placeholder="Diz ai seu nome: " 
                      />
                  <button type="submit" disabled={name.length === 0}>
                    Jogar
                    {name}
                  </button>
                  </form>
              </Widget.Content>
              <Widget>

              </Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>
              
              <p>loren ipsum dolor sit amet...</p>
            </Widget.Content> 
        </Widget>
        <Footer />
       </QuizContainer>
       <GitHubCorner projectUrl="https://github.com/AlcidesThiago2016" />
    </QuizBackground>
  
    )
}
