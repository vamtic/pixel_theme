// ==UserScript==
// @name     ppf_theme
// @grant    GM_addStyle
// @run-at   document-start
// @author   vamtic:
// @include  https://pixelplanet.fun/*
// ==/UserScript==

GM_addStyle ( `
a:link {
  color: #91ffe0;
}

a:visited {
  color: #b5d06d;
}

a:hover {
  color: #d9f68a;
}

.modallink {
  color: #91ffe0;
}

.modallink:hover {
  color: #d9f68a;
}

.inarea {
  border-color: #d5d5d5;
}

.tab-list-item {
  color: #e2e2e2; 
}
.tab-list-item.active {
  background-color: #7b7b7b;
  color: white;
}
.tab-list-item:not(.active):hover {
  background-color: #636363;
}

tr:nth-child(even) {
  background-color: #505050;
}

.window, .popup {
  background-color: rgba(59, 59, 59, 0.98);
  color: #f4f4f4;
}
.window {
  border-radius: 5px;
}

.win-title {
  background-color: #c1c1c1;
}

.win-topbar, .modal-topbtn {
  color: black;
}

.win-title:hover {
  background-color: #dedede;
}

.win-topbtn, .modal-topbtn {
  background-color: #a6a4a4;
}

.win-topbtn:hover, .modal-topbtn:hover {
  background-color: #8b8b8b;
}

.channeldd, .contextmenu {
  background-color: #535356;
  color: #efefef;
  border-radius: 8px;
}

.chntop {
  margin-top: 4px;
}

.chn, .chntype, .contextmenu > div {
  background-color: #5f5f5f;
}

.chn.selected, .chn:hover, .chntype.selected, .chntype:hover,
.contextmenu > div:hover {
  background-color: #404040;
}

.actionbuttons, .coorbox, .onlinebox, .cooldownbox, #historyselect {
  background-color: rgba(59, 59, 59, 0.8);
  color: #f4f4f4;
  border-radius: 21px;
}

#pencilbutton.ppencil {
  background-color: rgba(131, 147, 19, 0.8);
}
#pencilbutton.phistory {
  background-color: rgba(31, 84, 111, 0.8);
}
#pencilbutton.poverlay {
  background-color: rgba(117, 31, 31, 0.8);
}

.menu > div {
  z-index: 1;
  background-color: #15374fd1;
}

.modal, .Alert {
  background: #444242 none repeat scroll 0 0;;
  color: #f4f4f4;
}

.modal {
  border-radius: 21px;
}

.Alert {
  border-radius: 12px;
}

.modal-content, .win-content, .popup-content {
  color: #f4f4f4;
}

h3, h4 {
  color: #d7e5fb;
}

.modaldesc {
  color: hsla(220, 100%, 95.3%, 0.6);
}

.modaldivider {
  background-color: hsla(216, 4%, 74%, .3);
}

.modalinfo, .tmpitm-desc span {
  color: #ddd;
}

.modalcvtext, .tmpitm-desc {
  color: hsla(220, 100%, 95.3%, 0.6);
}

.overlay {
  background-color: rgba(187, 187, 187, 0.75);
}

.chatname {
  background-color: #434648;
}
.mention {
  background-color: #484643;
}
.chatmsg:hover {
  background-color: #2525252b;
}
.msg {
  color: #f3f3f3;
}
.msg.info{
  color: #ff91a6;
}
.msg.event{
  color: #9dc8ff;
}
.msg.greentext{
  color: #94ff94;
}
.ebex {
  color: #fff4bd;
}

.chatlink {
  color: #f9edde;
}

.statvalue {
  color: #ecc9ff;
}

.actionbuttons:hover, .coorbox:hover, .menu > div:hover {
  background-color: #363637;
}
` );
