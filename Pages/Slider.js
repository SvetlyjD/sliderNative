import React from 'react';
import {BackHandler, Button, Image, Linking, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Buttonp from '../Components/ButtonNavigate';
import {connect} from 'react-redux';
import {setLink} from '../redux/action';

export class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      numberImage: 0,
      sliderLink: ['Redux', 'Local'],
      imgLink: [
        require('../Image/polar1.jpg'),
        require('../Image/polar2.jpg'),
        require('../Image/polar3.jpg'),
      ],
      imgLinkfromUri: [
        'https://www.film.ru/sites/default/files/images/10(186).jpg',
        'https://cdn.trend.az/2016/07/21/pokemon_210716_01.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_qQNzJzd-1lQWMZdSaXmaE69rCozCXHqa_Cja92emNg4OsvtLuv1f6K-Y4jPqMoheSk&usqp=CAU',
      ],
    };
  }

  sliderSwitch() {
    this.setState({flag: !this.state.flag});
  }

  backButtonHandler() {
    this.setState({
      numberImage:
        this.state.numberImage < 1
          ? this.state.imgLink.length - 1
          : this.state.numberImage - 1,
    });
  }

  nextButtonHandler() {
    this.setState({
      numberImage:
        this.state.numberImage > this.state.imgLink.length - 2
          ? 0
          : this.state.numberImage + 1,
    });
  }

  componentDidMount() {
    fetch('https://imagesapi.osora.ru/', {
      method: 'GET',
    })
      .then(result => result.json())
      .then(result => {
        this.props.setLinkAction(result);
      });
  }

  render() {
    console.log('this props from redux', this.props.link);
    console.log(2);
    let link;
    link = this.state.flag ? this.props.link : this.state.imgLink;
    return (
      <View>
        <Buttonp link="/" name="Перейти на главную"></Buttonp>

        <View style={tw`flex mx-auto mt-5 mb-10`}>
          <Button
            color="green"
            onPress={() => this.backButtonHandler()}
            title="Back"></Button>

          {this.state.flag ? (
            <View style={tw`flex mx-auto`}>
              <Image
                source={this.state.imgLink[this.state.numberImage]}
                style={{width: 200, height: 200}}></Image>
            </View>
          ) : (
            <View style={tw`flex mx-auto`}>
              <Image
                source={{
                  uri: this.state.imgLinkfromUri[this.state.numberImage],
                }}
                style={{width: 200, height: 200}}></Image>
            </View>
          )}

          <Button
            color="green"
            onPress={() => this.nextButtonHandler()}
            title="Next"></Button>
        </View>

        <Button
          color="blue"
          onPress={() => this.sliderSwitch()}
          title={`${this.state.sliderLink[+this.state.flag]}`}></Button>

        <Button
          color="green"
          onPress={() => Linking.openURL('https://q-digital.org')}
          title="Перейти в браузер"></Button>

        <Button
          color="green"
          onPress={() => BackHandler.exitApp()}
          title="Выйти из приложения"></Button>
      </View>
    );
  }
}

function mapStatetoProps(state) {
  return {
    link: state.link,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setLinkAction: link => dispatch(setLink(link)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Slider);
