import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {connect} from "react-redux";

/*
Adapted from the example given at:
https://blog.cloudboost.io/getting-started-with-react-native-and-redux-6cd4addeb29
 */

export class GithubRepoList extends React.Component {

    renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.name}</Text>
        </View>
    );

    render() {
        const repositories = this.props;
        return (<FlatList
            styles={styles.githubList}
            data={repositories}
            renderItem={this.renderItem}/>);
    }
}

const mapStateToProps = (state, props) => {
    return state.repos.map(repo => ({key: repo.id, ...repo}));
};

const mapDispatchToProps = (dispatch, props) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(GithubRepoList);


const styles = StyleSheet.create({
    githubList: {
        flex: 1,
        backgroundColor: '#ff9d19',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});
