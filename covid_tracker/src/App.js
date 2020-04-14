import React from "react";

import { Cards,Chart,CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api/";
import coronaImage from "./images/image.png";

class App extends React.Component{

    state={
     data:{},   
     country:"",
    }

    //for normal functions we write async functions like this: function_name async{} 
    //componentdidmount is a special function, so we need to write async as a prefix
    async componentDidMount(){
        const data=await fetchData();
        this.setState({data:data});
    }

    handleCountryChange = async (country) =>{
        //fetch the date
        const fetchedData=await fetchData(country);
        //set state
        this.setState({ data:fetchedData, country:country });
    }

    render(){
        const { data, country } = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data={data}></Cards>
                <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
                <Chart data={data} country={country}></Chart>
            </div>
        )
    }
}
export default App;