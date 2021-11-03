import React from 'react'
import "./ChatHeader.css"
import Notifications from "@material-ui/icons/Notifications"
import EditLocation from "@material-ui/icons/EditLocation"
import PeopleAltRounded from "@material-ui/icons/PeopleAltRounded"
import SearchRoundedIcon from "@material-ui/icons/SearchRounded"
import HelpRoundedIcon from "@material-ui/icons/HelpRounded"
import SendRoundedIcon from "@material-ui/icons/SendRounded"

function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
            <h3><span className="chatHeader__hash">#</span>
                 Test Channel Name
            </h3>
            </div>

            <div className="chatHeader__right">
                <Notifications />
                <EditLocation />
                <PeopleAltRounded />

                <div className = "chatHeader__search">
                    <input placeholder = "search" />
                    <SearchRoundedIcon />
                </div>
                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader
