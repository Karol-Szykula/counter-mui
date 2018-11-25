import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

const style = {
    button: {
        margin: 12
    },
    paper: {
        margin: 20,
        textAlign: 'center'
    }
}

class Counter extends React.Component {

    state = (
        JSON.parse(localStorage.getItem('state'))
        ||
        {
            counterValue: this.props.value || 0
        }
    )

    incCounter = () => {
        this.setState({
            counterValue: this.state.counterValue + 1
        })
    }

    decCounter = () => {
        this.setState({
            counterValue: this.state.counterValue - 1
        })
    }

    add5ToCounter = () => {
        this.setState({
            counterValue: this.state.counterValue + 5
        })
    }

    substract5FromCounter = () => {
        this.setState({
            counterValue: this.state.counterValue - 5
        })
        console.log(this.state.counterValue)
    }

    resetCounter = () => {
        this.setState({
            counterValue: 0
        })
    }

    saveDataInLocalStorage = () => {
        localStorage.setItem('state', JSON.stringify(this.state))
    }

    componentDidUpdate() {
        this.saveDataInLocalStorage()
    }

    render() {

        return (
            <Paper
                style={style.paper}
            >
                <div>
                    <h1>{this.state.counterValue}</h1>
                </div>
                <div>
                    <RaisedButton
                        label="+"
                        style={style.button}
                        onClick={this.incCounter}
                    />

                    <RaisedButton
                        label="-"
                        style={style.button}
                        onClick={this.decCounter}
                    />
                </div>
                <div>
                    <RaisedButton
                        label="+5"
                        style={style.button}
                        onClick={this.add5ToCounter}
                    />

                    <RaisedButton
                        label="-5"
                        style={style.button}
                        onClick={this.substract5FromCounter}
                    />

                    <RaisedButton
                        label="RESET"
                        style={style.button}
                        onClick={this.resetCounter}
                    />
                </div>
            </Paper >
        )
    }
}

export default Counter