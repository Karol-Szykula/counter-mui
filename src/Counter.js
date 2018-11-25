import React from 'react'

class Counter extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    state = {
        counterValue: this.props.value || 0
    }

    incCounter = () => {
        this.setState({
            counterValue: this.state.counterValue + 1
        })
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

                    >
                        -
                    </button>
                </div>
                <div>
                    <button

                    >
                        +5
                    </button>
                    <button

                    >
                        -5
                    </button>
                    <button

                    >
                        Reset
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter