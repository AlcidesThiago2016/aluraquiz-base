import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head';
import QuizLogo from '../src/components/QuizLogo';

export default function QuizPage() {
    return (
        <QuizBackground backgroundImage={db.bg}>
        <Head>
          <title>AluraQuiz - Modelo Base</title>
        </Head>
           <QuizLogo />
           <Widget>
              <Widget.Header>
                <h1>The Coffee Programing</h1>
                </Widget.Header>
                <Widget.Content>
                    
                </Widget.Content>
                <Widget>
  
                </Widget>
              <Widget.Content>
                <h1>Quizes da Galera</h1>
                
                <p>loren ipsum dolor sit amet...</p>
              </Widget.Content> 
          </Widget>
          <Footer />
         
         <GitHubCorner projectUrl="https://github.com/AlcidesThiago2016" />
      </QuizBackground>
        
    )
}