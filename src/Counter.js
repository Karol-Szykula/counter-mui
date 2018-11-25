import React from 'react'

class Counter extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    state = {
        counterValue: this.props.value || 0
    }



    render() {

        return (
            <div>
                <div>
                    <h1>{this.state.counterValue}</h1>
                </div>
                <div>
                    <button

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
                        -
                    </button>
                    <button

                    >
                        -
                    </button>
                    <button

                    >
                        -
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter