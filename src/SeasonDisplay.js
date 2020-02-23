import React from 'react'
import './style/SeasonDisplay.css'

const seasonConfig = {
    summer : {
        text : 'Panas beut dah',
        iconName : 'sun'
    },
    winter : {
        text : 'Dingin brrrrr',
        iconName : 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const {text,iconName} = seasonConfig[season]

    console.log(season)
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            {text}
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay;