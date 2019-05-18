import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Gallery extends Component{
    constructor(props){
        super(props)
        this.state = {
            tagList: [],
            imgList: [],
            startup: true
        }
    }
    componentDidMount(){
        this.getTag()
        this.getImgList()
    }
    getTag = ()=>{
        let tagList
        fetch("/api/imgTags")
        .then(res => {
            return res.json();
        })
        .then(myJson => {
            tagList = myJson.map((a)=>{
                return a.tagName})
            this.setState({"tagList": tagList})
        })
        .catch(err=>{
            //console.log(err)
            this.getTag()
        })
    }
    getImgList = (e)=>{
        if(typeof e !== "undefined"){
            fetch("/api/imgSrc/"+e.target.innerHTML)
            .then(res=>{
                //console.log(res)
                return res.json()
            })
            .then(myJson=>{
                //console.log(myJson)
                let myList = myJson.map(a=>{
                    return a.source
                })
                this.setState({
                    imgList:myList,
                    startup: false
                })
            })
            .catch(err=>{
                console.log(err)
                this.getImgList()
            })
        }
        //
        else{
            if(typeof this.props.match.params.category !== "undefined"){
                fetch("/api/imgSrc/"+this.props.match.params.category)
                .then(res=>{
                    //console.log(res)
                    return res.json()
                })
                .then(myJson=>{
                    //console.log(myJson)
                    let myList = myJson.map(a=>{
                        return a.source
                    })
                    this.setState({
                        imgList:myList,
                        startup: false
                    })
                })
                .catch(err=>{
                    console.log(err)
                    this.getImgList()
                })
            }
            /*else{
                this.setState(imgList: )
            }*/
        }
    }
    
    render(){
        //console.log(this.props.match)
        let tagNav = this.state.tagList.map((a,index)=>{
            //console.log(a)
            return <Link key={index} to={"/gallery/"+a} onClick={this.getImgList}>{a}</Link>
        })
        let imgGrid = this.state.imgList.map((a,index)=>{
            return <img className="item" src={a} key={index}/>
        })
        console.log(this.state.startup)
        let message = null
        if(this.state.startup){
            message =  <h1>Please select a category</h1>
        }
        return(
            <React.Fragment>
                <div className="scrollmenu">
                    {tagNav}
                </div>
                <div className="gallery">
                    {imgGrid}
                </div>
                {message}
            </React.Fragment>
        )
    }
}
export default Gallery

/*<a href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                    <a href="#support">Support</a>
                    <a href="#blog">Blog</a>
                    <a href="#tools">Tools</a>  
                    <a href="#base">Base</a>
                    <a href="#custom">Custom</a>
                    <a href="#more">More</a>
                    <a href="#logo">Logo</a>
                    <a href="#friends">Friends</a>
                    <a href="#partners">Partners</a>
                    <a href="#people">People</a>
                    <a href="#work">Work</a>*/