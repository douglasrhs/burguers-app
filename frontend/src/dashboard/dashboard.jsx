import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'
import axios from 'axios'
const BASE_URL = 'http://localhost:3000/api'

export default class Dashboard extends Component{
    
    render(){
        
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 12' color='green' icon='money'
                            value='DASHBOARD EM CONSTRUÇÃO' text='Total de Dinheiro na CONTA'/>
                        
                    </Row>
                </Content>
            </div>
        )
    }
}