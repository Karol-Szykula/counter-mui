import React from 'react'

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
            <div>
                <div>
                    <h1>{this.state.counterValue}</h1>
                </div>
                <div>
                    <button
                        onClick={this.incCounter}
                    >
                        +
                    </button>
                    <button
                        onClick={this.decCounter}
                    >
                        -
                    </button>
                </div>
                <div>
                    <button
                        onClick={this.add5ToCounter}
                    >
                        +5
                    </button>
                    <button
                        onClick={this.substract5FromCounter}
                    >
                        -5
                    </button>
                    <button
                        onClick={this.resetCounter}
                    >
                        Reset
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter