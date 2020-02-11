/**
 * Created by xuanl on 6/29/2017.
 */
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {AwesomeIcons} from "../common/Icons";
import Styles from "../common/Styles";
import Strings from "../common/Strings";
import Colors from "../common/Colors";
import Dimens from "../common/Dimens";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        padding: Dimens.common_padding,
        borderBottomColor: Colors.dim,
        borderBottomWidth: 1
    },

    start_container: {
        paddingTop: 8,
        paddingBottom: 8
    },

    title: {
        ...Styles.textPrimaryLarge,
    },

    subtitle: {
        ...Styles.textSecondaryNormal
    },
    star: {
        width: 36,
        height: 36,
    },
    btn_container: {
        ...Styles.rowCenterVertical,
        justifyContent: 'flex-end',
    },

    btn: {
        ...Styles.btnPrimary,
        height: 36,
    },
});

interface RatingState {
    rate: number
}

interface RatingProps {
    on_rating(number_star)
}

export default class RatingView extends React.PureComponent<RatingProps, RatingState> {

    constructor(props) {
        super(props)
        this.state = {
            rate: 5
        }
    }

    render() {
        const {rate} = this.state
        let starColor = [Colors.rating_star, Colors.rating_star, Colors.rating_star, Colors.rating_star, Colors.rating_star]
        let starName = ["star", "star", "star", "star", "star"]
        for (let i = rate; i < 5; i++) {
            starColor[i] = Colors.gray
            starName[i] = "star-o"
        }
        let rateString = ""
        if (rate === 1) {
            rateString = Strings.rating_hate
        }
        if (rate === 2) {
            rateString = Strings.rating_dislike
        }
        if (rate === 3) {
            rateString = Strings.rating_fine
        }
        if (rate === 4) {
            rateString = Strings.rating_like
        }
        if (rate === 5) {
            rateString = Strings.rating_enjoyed
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{Strings.rating_title}</Text>
                <View style={styles.start_container}>
                    <View style={Styles.rowCenter}>
                        <TouchableOpacity style={[Styles.center, styles.star]}
                                          onPress={() => {
                                              this.setState({rate: 1})
                                          }}>
                            <AwesomeIcons name={starName[0]} size={24} color={starColor[0]}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.center, styles.star]}
                                          onPress={() => {
                                              this.setState({rate: 2})
                                          }}>
                            <AwesomeIcons name={starName[1]} size={24} color={starColor[1]}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.center, styles.star]}
                                          onPress={() => {
                                              this.setState({rate: 3})
                                          }}>
                            <AwesomeIcons name={starName[2]} size={24} color={starColor[2]}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.center, styles.star]}
                                          onPress={() => {
                                              this.setState({rate: 4})
                                          }}>
                            <AwesomeIcons name={starName[3]} size={24} color={starColor[3]}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Styles.center, styles.star]}
                                          onPress={() => {
                                              this.setState({rate: 5})
                                          }}>
                            <AwesomeIcons name={starName[4]} size={24} color={starColor[4]}/>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.rowCenter}>
                        <Text style={styles.subtitle}>{rateString}</Text>
                    </View>
                </View>
                <View style={styles.btn_container}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => this.props.on_rating(this.state.rate)}>
                        <Text style={Styles.textHighlightNormal}>{Strings.action_rate}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
