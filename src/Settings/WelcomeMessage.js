import React from 'react'
import { AppContext } from '../App/AppProvider';

export default function ({firstVisit}) {
    return (
        <AppContext.Consumer>
            {({firstVisit}) =>
                firstVisit ? <div>
                    Welcome to CryptoDash, please select your favorite Coins to begin. {' '}
                </div> : null
        }
        </AppContext.Consumer>
    )    
}
