import React from "react"


export default function useToggle(){
      const [texthover,setTexthover]= React.useState(false)
    function hovertext(){
        setTexthover(prev=>!prev)
    }
    return {texthover,hovertext}
}