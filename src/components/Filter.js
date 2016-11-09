/**
 * Created by Igor on 03.11.2016.
 */
import React from 'react'
import { Filterlink } from './Filterlink'

const Filter = () => {

    return(
        <div>
            SHOW:
            <Filterlink filter="all"> ALL</Filterlink>
            <Filterlink filter="done"> DONE</Filterlink>
            <Filterlink filter="undone"> UNDONE</Filterlink>
        </div>
    )
}




export {Filter}
