import React from 'react';
import range from 'lodash/range';
import PropTypes from 'prop-types';

export class RadialTickMarks extends React.Component {
    static propTypes = {
        radius: PropTypes.number,
        angleInterval: PropTypes.number,
        length: PropTypes.number,
        thickness: PropTypes.number,
        mark: PropTypes.func
    };

    render() {
        const { radius, angleInterval, length, thickness, mark = SimpleMark } = this.props;

        return (
            <g>
                {
                    range(360 / angleInterval).map(index => {
                        const rotation = (index * angleInterval - 90);

                        const rect = {
                            x: -thickness / 2,
                            y: -radius,
                            width: thickness,
                            height: length
                        };

                        return (
                            <g key={index}
                               transform={`rotate(${rotation})`}>
                                {
                                    mark({ rect, index })
                                }
                            </g>
                        );
                    })
                }
            </g>
        );
    }
}


function SimpleMark({ rect, index }) {
    return (
        <rect {...rect} fill={'black'} />
    );
}
