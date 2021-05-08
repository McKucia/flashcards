import React from 'react';
import Flashcard from '../flashcard/Flashcard'
import './memory.css'
// import { flashcadsData, translate } from '../data'

export default class Memory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            flashcadsData: []
        };
        this.prepare = this.prepare.bind(this);
    }

    prepare = (j) => {
        let definition = j.list[0].definition.split('[').join('')
        definition = definition.split(']').join('')
        let example = j.list[0].example.split('[').join('')
        example = example.split(']').join('')
    
        const res = {
            id: Math.random(),
            definition: definition,
            example: example,
            name: j.list[0].word
        };
        var arr = []; arr.push(res);
        this.setState({flashcadsData: arr})
    }
    
    translate = (term) => {
        console.log(term);
        fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${term}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "27ca0ec2b1msh49e039631e8e821p153ed3jsnfe9376c0d8ba",
                "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
            }
        })
            .then((serverPromise) => {
                serverPromise.json()
                    .then((j) => {  this.prepare(j); })
                    .catch(function (e) {
                        console.log(e);
                    });
            })
            .catch(function (e) {
                console.log(e);
            });
    }

    handleChange = (e) => {
        this.setState({word: e.target.value });
    }

    fetchData = () => {
        this.translate(this.state.word)
    }
    
    render() {
        return (
            <div id="container">
                <ul>
                    {this.state.flashcadsData.map(flashcard => (
                        <li key={flashcard.id.toString()}>
                            <Flashcard
                                pl={flashcard.definition}
                                esp={flashcard.example} 
                                word={flashcard.name}/>
                        </li>
                    ))}
                </ul>
                <div id="inpt">
                    <input
                        type="text"
                        placeholder="Wpisz słowo..."
                        onChange={this.handleChange}></input>
                    <button onClick={this.fetchData}>Sprawdź</button>
                </div>
            </div>
        );
    }
}