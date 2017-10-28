import React from 'react';
import { WatchShell } from '../components/watch-shell';
import { MinuteHand, RoundedHandWithCircularEnd } from '../components/hand';
import { RadialTickMarks } from '../components/radial-tick-marks';
import { RadialTickLabels } from '../components/radial-tick-labels';

export function AnalogFace2() {
    const strapColor = '#ff3987';

    return (
        <section style={{
            flex: 1, display: 'flex',
            justifyContent: 'center',
            alignSelf: 'stretch', alignItems: 'center',
            background: 'linear-gradient(#eee, #aaa)'
        }}>
            <WatchShell strapColor={strapColor} rimColor={'#940038'} faceColor={'#111'}
                        buttonColor={'#777'}>
                {
                    ({ config, time }) => {
                        // let hr = time.hours();
                        // const hours = hr >= 12 ? hr - 12 : hr;
                        const minutes = time.minutes();

                        const radius = Math.min(config.width / 2, config.height / 2) - config.rim;

                        return (
                            <g>
                                <g transform={`translate(${config.width / 2}, ${config.height / 2})`}>
                                    {/* Outer ring */}
                                    <g>
                                        {/* Hour marks */}
                                        <RadialTickMarks radius={radius}
                                                         angleInterval={30}
                                                         length={10} thickness={6}
                                                         mark={
                                                             ({ rect }) => {
                                                                 return (
                                                                     <rect {...rect}
                                                                           fill={strapColor} />
                                                                 );
                                                             }
                                                         } />

                                        {/* Minute labels */}
                                        <RadialTickLabels radius={radius - 1.25 * config.rim}
                                                          angleInterval={30}
                                                          label={({ x, y, index }) => {
                                                              const label = index * 5;
                                                              return (
                                                                  <text x={x} y={y}
                                                                        textAnchor={'middle'}
                                                                        alignmentBaseline={'middle'}
                                                                        fontSize={11}
                                                                        fill={strapColor}>
                                                                      {`${label < 10 ? '0' : ''}${label}`}
                                                                  </text>
                                                              );
                                                          }} />
                                    </g>


                                    <MinuteHand length={100} thickness={6}
                                                time={time}
                                                angle={(minutes / 60) * 360}>
                                        {
                                            ({ rect }) => <RoundedHandWithCircularEnd rect={rect}
                                                                                      color={strapColor} />
                                        }
                                    </MinuteHand>
                                </g>

                                {/* Text labels */}
                                <g>
                                    <text x={config.width / 2}
                                          y={30}
                                          alignmentBaseline={'middle'}
                                          textAnchor={'middle'}
                                          fontSize={14}
                                          fill={strapColor}>
                                        Let's Code to Prototype
                                    </text>

                                    <text x={config.width - config.or}
                                          y={config.height - 30}
                                          alignmentBaseline={'middle'}
                                          textAnchor={'end'}
                                          fill={'lightyellow'}>
                                        {time.format('MMM DD')}
                                    </text>
                                </g>
                            </g>
                        );
                    }
                }
            </WatchShell>
        </section>
    );
}


