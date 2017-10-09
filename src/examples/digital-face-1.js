import React from 'react';
import { WatchShell } from '../components/watch-shell';
import { Motion, spring } from 'react-motion';

export function WatchFace1() {

    return (
        <WatchShell strapColor={'brown'}>
            {
                ({ config, time }) => {
                    return [
                        <text x={config.width / 2}
                              y={config.height / 2}
                              textAnchor={'middle'}
                              fontSize={70}
                              key={'h:mm'}>
                            <tspan alignmentBaseline={'middle'}>
                                {time.format('h')}
                            </tspan>

                            <Blink text={':'} />

                            <tspan alignmentBaseline={'middle'}>
                                {time.format('mm')}
                            </tspan>

                            <tspan alignmentBaseline={'baseline'}
                                   fill={'#999'}
                                   fontSize={20}
                                   key={'a'}>
                                {time.format('A')}
                            </tspan>
                        </text>,
                    ];
                }
            }
        </WatchShell>
    );
}

class Blink extends React.PureComponent {
    state = {
        time: 0
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ time: (this.state.time + 1) % 4 })
        }, 250)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { text } = this.props;

        return (
            <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(this.state.time / 3) }}>
                {
                    (style) => (
                        <tspan alignmentBaseline={'middle'} opacity={style.opacity}>
                            {text}
                        </tspan>
                    )
                }
            </Motion>
        );
    }
}
