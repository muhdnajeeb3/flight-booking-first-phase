import React, { useState } from "react";
import styles from "./flight.module.css";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
import Select from "react-select";
import icon1 from "./logo.png";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import FareTypes from "./FareTypes";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./flight.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBus,
  faHome,
  faHotel,
  faParachuteBox,
  faPercentage,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

const FlightHome = () => {
  const [from, setFrom] = React.useState("Delhi");
  const [to, setTo] = React.useState("Kolkata");
  const [departure, setDeparture] = React.useState(null);
  const [retrn, setRetrn] = React.useState(null);
  const [selectedButtonColor, setSelectedButtonColor] = useState(1);
  const [oneWay, setOneWay] = useState(true);
  const [roundTrip, setRoundTrip] = useState("");
  const [multiCity, setMultiCity] = useState("");
  const [newCity, setNewCity] = useState([]);
  const [select, setSelect] = useState(false);
  const [selectTo, setSelectTo] = useState(false);
  const [selectOne, setSelectOne] = useState(false);
  const [selectTwo, setSelectTwo] = useState(false);
  const [selectAnotherCity, setSelectAnotherCity] = useState(false);
  const [selectNewCity, setSelectNewCity] = useState(false);

  const [travellers, setTravellers] = React.useState(null);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let ar1 = [0, 1, 2, 3, 4, 5];
  let ar2 = [0, 1, 2, 3, 4];
  const [openTravellers, setOpenTravellers] = useState(false);
  const [togglePassengerColor, setTogglePassengerColor] = useState(false);
  const navigate = useNavigate();
  const onClickModal = (e) => {
    setOpenTravellers(!openTravellers);
    e.stopPropagation();
  };
  const options = [
    {
      value: "Delhi",
      label: "Delhi",
      //   icon:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
      //   <path fill-rule="evenodd" fill="url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRUYGRgaHBgYGBocGhkYHBoaGBgZGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQsJCw2NDQ0NDQ0NzQ0NjQ0NDQ0NDQxNDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAJkBSQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADwQAAIBAgQEBAQEBAQHAQAAAAECAAMRBBIhMQVBUWEicYGRBhMyoRRCsfBSwdHhcoKS8RUjU2Jzg6IH/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAEDAgQFBv/EACgRAAICAgIBBAICAwEAAAAAAAABAhEDIRIxBBQiQVEyYROBscHRcf/aAAwDAQACEQMRAD8A52KKKewkfNyYopKK0ZkVogI8eMyKKKKArFHitHjoBRRR4GRrR48cCADAR7R4poBo8UeAWNHitHtARJKrAg39OVukVTUkyMe8VDvVDRRR4xDWitHiiGesfD2LVqCaEEKFIIsfCLTS+YL2BE4HgvESqbAsdByGg6coCtxx0YFrltQy8h5d557wycnR7kfJhGCbPR0ZdgYSnX5dJ5nguOVPmAs5C9D0nb8PxSud5KeJx7LYs8cnRuq0csJVOg0MD+I1sdpLiXsv5hAsxJ7SAqKdjJIYUMKpkmWQUyd4gIhO8ZqIO8cPHLiAA3pyrVqW2Es1aotMuo9zAC6laH+ZMtWljNAR4dFFaPaewfNijxrR4xCiijwMtijgRCPGA0ePFaBkaPaOBHgA0eKPNANHtHtHKwERtHAj2j2gAssa0mDpGgBG0UnpGtABopK0QEAI2itJWitAZNarAWBIHQSxQwr1CAATK9NypuJs4XH+FjbKbW029pKTa6RfCoydSZXfhxRwHItvpeb2AbINC2p/dpiLiruG7eZ03HaaC8UdgAEFvX27SM1JqmduFwi20dTR4jewzamHFYXnHtiMpJBAHMRqXFmLDpIPC/g61nS0zvMPY7S0NJkcLxYZQTueUvtWBE55J2dKdqwz1IFcRbnpK1WtKj17G0KBsvPjOhiGJJmfmklaDQWWnqkwZMHmj3iAmplq8pgy1eIZ4oBHitHnsnzQ0eK0e0DI0eKPGgFHEUeBkVo9oWjRuCeQhUogakX/AJQs0otlW0NQwzubIpJ7QlOgGYi9gNdZfwvE2pmyi9hb+5ilJ1o3CEW/c6RQxOCdDZ1I9NNeV4BEJ2E6Di/Eg4AdSWAuNbanqJk4apkF9Ioyk1bQZIRjKk9A61HJa/MRUaJY2EjUcsYwaa3RNuN/oJXw5Q2O8FaEaoTvEoEa/YnTeiForQ7U9BIBIWNxYyUyxsoJJ5CRKzrfh7gr+JmWxK6D9dbeU6PDfCtK13AZibm48PkBIT8iMXR2Q8Cc0n0ecYXAPU+hC3l+k6PB/CRdTlcq+zAgMO4BB6853C8KpqAqLlAFhbS3lLdHDhQAOU5p+U3+OjtxeBCP5bOVwHw0aasjBHBG9tfLbz95jJ8JFSxci2uUa99/tPRyt4JqIO4klnmvk6JeLjlVro8jXhDm5ykAc/tAPTs2Ua8u956xiMIljpvvOTThI+dnIORTpfnadMfIu7OOfhJVxObTA1FezLl0vr06zXpoiUiW3A079yOms7H8IjkEjYWguLcIV6LIijNaynYg+cw83KrLR8XgnWzz7GVlI29pHA4Z31UaaeneWH4S6mz+E6Cx37EW5TYwqKqZSLdeR0lXNJaOaOOUpXLRPAVSh8RvYfvzl2jji2vLWZNWkMwyadecD+IKMAToD13kXFSOpTcdM6AVST2hTrKuGNxe+hlpGA3kmi8WNkiBhQwO0g4mGbGBk80Sp1jhYhoV5avKhEsxAeNiPEI89g+ZY0e0eKACiEe0eMBoRAvO8hHgKy7hKwUG4vLFGiXJ8tO/OZd4alimU6GZcforHItJ9GxhuHZyS1lHbcwnEcKiaqbG1iOvpKFLiLKAN76mWq+KRkJIu2sm1JPZ0qWNxaXf7KNZ1IsLX687SoYxMUslRxTduxQqgW3sftIqh5An7yYpkbgjzBELBRZFkt38olF4/lC0PCQYXoFG2dPwrgBenyBbTXkOs1+HfDCh7uqlRa3e3UQXw3xhTZCdddev7E2a3GVXwp425n8q+bfyH2nnZZzTaZ7mHFicU0rNMUwDpCq04/EY6tUJ8eUXsLDkN7DmfO9oSkXUWDVNSTfPbew0A2Gm05mzsOwimTgOJLorNY7Akg3PcjnNW8SdgPGMV5FzGBVr67Ss2HLaHaXiJEmaTMtEaVPKLRhV10lLFY3Jr0gMNxhGHeaUX2Lkk6LGOCkXIFwZy3EsWpuABc7Tb/Gq7MmxG8wOLZEdco52uNj6cpXGt7IZnq0QwyZswDHS2h7d4FcOCSSuu2vPytLIxwFwoBIteRXi1L8xN+4/SU93wiPt1bJ022QAi2tjLaOTobW23gVro4uvKU6VMl/rI1uAAN7/AHmasrddbOhw+gh6dr6wNLaHQSDLoPYGM9rbQd5JXmTVg8ksZYP5kPmgB4vFJCPaeufMkZeoUQ9NrDxoSw6ldyO+xPpKYEmlV0vkYqdNRuLG4IPKYyKTja7RXC4qVS6en/0hFAPUq3ucj63NxYm/UqQT73hhjKX56dVD1V1YX7Kyg2/zGS9Sl+Sa/ov6Jv8ACSf9khHklqUCNKxX/HTZfuheFXDA/RVot/7FQ+1TKZteRjfTROXiZo9p/wCSuJMoR3mhQ4TVOopse4GdfdbiHqZ6Q8agg6EEWt6cpr+VPrZlePKrla/oyBf2mzgMCXXN9QtbzN5qYKhQK5rBxa2W3czTw1RSQtNRZd+0jPN9I68PiJO5M5LE8LcOQF03G3t5xYPg9R2tltbe89ATD3ubC8IcASBrbyEn6l1Rb0MLvZx2GwTU3BGa68xa3kTN1aeddbeupE1EwI2Iv+95SxfCHTx0zc80PPy7ybycnsusPBa6MHG8EUvcELflzJ7dJQxGEyiwN+36n7S1VrO77WK3Hl59JbwuB1LMbnmx2HYCbln4KrtkV40cjbSpFPA4RgNdL9PqI6X5D96zTcrTADei6c9LW6+nOV62NVCbHUA7f16zDxWMvqxHUn+/ScWTK5O2zvxYYwXGKNarxNi3hsqjkBr6seUHW4jbUtf1nI4njw2pIzm9rgHLckAC/PUjbrJ8C4Zica4ZnKU73LC6i3RbasfW0lUpFfbHs67ghfFV0GyLZm6AD+Z2npgWZHBcJToJkQanVjzY9SZpmuJWMaRNythWEp4ipodZOpiRa95gcXxxVfB5SsItszOSirLjcUVdz2llMSrrdW3nnuJxbBiDqJb4VjyumbTbXlOiWGo2jkXlJy4sscdrurK1zYltO47e0yn4m42sOmm0ucWrB+e1/wB3mJU6S+OK4q0cmeclJ8WXKHEimu7SVTijsdQNveZhEjeU4R7ILNLqwteuS1wAvlpK7tc3jubyNo6om5Ns6PhPEgbJYCwtLdBVDm3b/ec5hsM7aIL+XabDOKVmOr2F+055xV6O/Fkk4rl8fJ0IqADSTw1bN/Oc++ILjMpPl5dZo8LW6a6EjXr5iQlGkdcZ8nSNNq0p1cXY2aVcSrougLWPr7c5WqU6ja230t2hGKCU39G0mNQi4YeUt/il6zjqNMlwrX7DbX+k6T8If3eDhFDhkk10eYCSAiAjgT0T58Vo4iAkgIDI5Y+WTCzV4XkAYvaxGx19pmXRvHG3V0YT4UEaKt/YeZtADBnYoNdLqSWvbQBbm59ORnRUeHM7EILjU3m9w7gSooLgFt7jcX5X6bTjz44PfTPT8WeWOntfv/R56lMKdc6N5a+e4I+8v0+JV10TEuR0NR7eofwzt8XSQqTkDHbxAH01nOnC0nJBphT/ANpK+ttpzfwSe4nY88U6kZ9L4gxKmxKOf/HTP/0ij9ZcwPxQ6E/8ile9zY1FN/IuQPaY3GMC+GdVdcucXDXBzZTY2tsL8t9RealLA4p6OdH+YhG1/mW1sRkcHxDXQDlI+/7Zaofo6DD/ABuv5qDD/DUB+xQfrDYz48XIwpIA9wqhyC1yL/Qp1Ftb3A016ThTUBJRwEYqQCgI1tu2uVSBa5AA/nz+PxWUulIWQ3Utuzi+l2te2wyj1vCLd7G19HZ/GnFcSrUGFR/ksqeNXK3rMWLeEEXAAU2tYA6WuL9LwTjVTEYZBUqohBdHzOqPUK5dix1FmsbfznnXCuJ1cgo1lR0Fzare476eIdLgjoTNvi2IyBfnKKaqLIgFhYm/hU6sSdbm5PWJNr/0bSZ11SoiMELAXAK28VxsCCL32lfimLATRsq9WNr++08uq8cfOTT8A2FgM1vM7ekz69R3OZ2Zj1Ylj7mNqTBcUddj+PpqKZDt1Jyr/qO/71mNWWrXKoczljdQqkAjayJuwuD4j0MoYcKCBkZ25chqNLC3X327z1D4GFKnSylkXEOTnU2VrX8Cqx+rTle9+UIxSYSk2tGZwn4aNJEFd1X5j5VTMFKgjM7s4scwyLYLop7m47TEIEUfLtYbAbW7StxXhqYgqGd0ancgggAHSxYEciL2uIHEYnDYdKVJqwUZFVCcxLKoyhiVGgNtzYHWXjUXshK5LQbA8RbPdidzp5zpkN976zmsPSpioutra+/PuNZump4st9CNDKTpvRPHe7B8VLJTOUX/AHynGYniDtpcjtOl485uljpqN9tRvOfxNFSCxPivy5+flLYUktnN5LbdRZmEwtF7b7QuCwL1XyKNbX12AnV8M4AqZc5DMLm1tL+u8tPJGK2c2HDObtdfZyVXEm2UCwg0wjvqqM3WwJ/SeknDU9Loum1wNPLpLNJkHS3aQ9RS0jp9HyfuZ5SaDfwn2Metw6qoBam4zbeEm/OeslUPISZVYvVP6H6CP2eQtw6p/wBN/wDSY9PhtQkAoQOpE9Zemp5CV6uGBEPVP6D0MV8nGYN0RSFtcA69baTIrYq69SSSb679J2OJ4UjdR5WB97SnV4VTOgF/Mf7RxyRuxywyapGPwsAbG507j2nS0ECjaUcNwIK+ZSQOnKa9LBX0J07SeSSb0VwwlFU0BcaXsfSDwtAs3iFhz7/2m0mGtCDCjykuVF+JmvTQbKLjaHkcQgU2/WTtCwSPIMscLJqI4WeqfO0QyyYWSAjgQsOJFVkgIRVklSKzSiFwWIZDcMR5TWo8bcML6iYb1FX6mC9LkD9YlqKdmB8iD+klJQbpnVB5IrV0dRiMcrrpude8pVXGjEAcjMxWMulCy5jv++UwopFnNyKqFVV7GlWGcZhiPEtNPF9J3Q3AHp2lrgjoGb5DKENy9NH+Yqta2ZCbNY6Aqw6WJ1tzeMwpao6bAkX6a2IJHqfeXU4wuDTJTKKL3LmnmdyQLheo16adtpxOLjJuz0VKMorXwdVisCtcr8xPCoKhFsCQf4mXWwtoo085z3EOF4ekWVKys4Ay0fCWBZlUEkbAZtiLzl+KfF2IqAoruqnc3Csw75bADymJhqro2caEg2a19bg6XG91Gv8AWSat2zaaSpG38SYooBTPiJtctZmAXY3vcb6C9tOovMivWqVjmquza3zMSxJIUHudFX2hMLRNVhfMztc5ib33PPnYTo8N8F4twCMORcDVmVLA9QW09oVXQGFSwiAC43/ekScOZ9Kam97XJUKLb3Y2F+17z0PhX/5031YmoBbZE1P+Zzb2Ues1n+C02FRwBoBlWw7ACwENj0eacJKUmysjF7XLWVgBb8tiem+8vcRewzMCBYHUakE2Fuus3qHwizYiuqP4aaqA5X6nZcwUC9hbS+ulx1lmv8BNkypVXNYXuCBm3+qxJ152EVNsdnFYn4iqtTamp8Klcmcl8tgQcobw9NDp0F9Rs8VoHFtSxNEs5dVSrTW3hVSQCqAXP1b8iveV1+B67jOCShJ1UFtv4RoWHeEw/CEw31M+cnTMhCX6lL3v3Ibyjl8CR0+Dwr06dM1NGVAGH+Y5VuOgt+k1atN2UFW5AjznM4TGYmmt1u6a5lILoOov+Q635TX4b8QUDpVR6ZO+7p03UXH385aOZcUvog8L5N/ZKgjtcN9WtgfveQp4NmzZxlyhjtYaDr3nUYColRLqyvb8ykNfobjymXi7jMORO3aXhm5K0qIzwKOm7MPDY16Wq8/0haXHKl7sb9ZLHomXQg9CNPSZRWdCjGW2jilKUHSZ0f8AxR6iBgcpBt1lnBYhk1OoO3rvMfgdFnDAbXH95rVaRprfQW1PkNxIyUU+KOrHKUoqTKeO4s+eyOQSdreW06LDVHemGAJv1teci9Tx5wNMwKrvz5dP7zu6D6TGVKKVIphbk22wdGm9vEw/p6yOJd1tkAOut9NOsvB5BiJCzoozyhceMWPO0KKY0lnLBusdhRC0s0pWk0qRMC6rx7QCPLCzJorYjC315yHyJoRWELFR4gqSYWGbWIJPVs8HgCySQSECSQSFhwIBJIJCqkkFhZtRKtXCo31KD6a+8rNwdCdAR5H+t5rBe0KiAEHfqJOUIy7RaEpx6Zj1vh50AKVBr2Kn3F5UxNLE0hcs9jtlfNc/4b3+06Z6mum0z+JYP5wsXZRrfLYEg8rkEgeW85peOquPZ1x8jdS6MLF8SKBM7l2F3yAAamwGc2BOwsOdxyvfneIO9Ry7La9gANgFAAW/YWnX0vhqittHI6FtD52AmhR4dTUWFJLDa4zW7gtfXaYWGZR+RBdI8/wfDnqEhEdyOSKW8r2vYek6HhvwjiD9RCDndte/hHqLG06LE4HOLF3t/Dmuo8lh+G4epTuGqMy7AEaD1Nz6bRLFK/ctA8yr2j8E4elBlyqS1/qbUgncryXblPQcG91E5MYd7XW0t0OJOmjrNSgn+IoTa7OrCzF+Ladb8LU/DhjUsAMl89iwDlLa5subbWWcHxIONPaXvnC0i40XUkzy74Zr46liqNB89qnjqh1zMyFbhndhmDKAF30sB2npq2Eg+IEz6uPW5B0mlFsTkkabkSjjUpuoD6qCDa+htfQ9tZkVsaSbXNust4dA4GZ9+W1/LrN/x0tk1kt0i/QNNAcgVRckhQAL8zYST4Sk+rojHkSov77w1HChQANpcSiOkm0iisqIigZUUAdgBMfHUSRexGttLDTrOlKATC4sjOcoGltbd5SD2ZyLRyuJC7AtcciITh/Di4LHbkOp/pNnAcBDBg56WIm5h8KlNbILD3/WXlmSVI5IeO3LlIxOE0St7plM0npBtwD5xsQ4zXiFSRk7dnVGKiqKFCiyucyra+lhNam8ATHVpmTscVRcV4+aVleTDzNGiyrRFoANHzRAJ4BH1hyZRxeKCcpqOwbosCuQ00cPWBE5R8cTsLQmCx7pcHxCacHRNZFZ1ua4i1mHR4r1Bml+Mk+LKckeVqkIEiWEBno2eRQPLCJTvCKskohZpRD0MEWO4hanDiunOCoVMrA9NZtYbiiuwBSSlKS6LwjBqn2Z68LbLc7yscIy72951mZXGkzsbgxYm0xHK72VlhjVo53JGCS7WQAAc+cEFlkzmcaZBfKGNJLd+vKRsIssTNIiyAS1SrgkAgW9oHLEqQas0m0bCuthkUWh6aq5N1327zIp1CL25yaV2A0knBllkRtYbCKh0lvtOfTGP1kvxTb5jeYcGbWSK6L+MDg9QftMyrhzvJvinbdpHMTqTKRTRiUlIBktJC99/KGteL5cdk6NnAYwAAFrmayVROWoELfrLdDFsJGUPo6IT1s6FyCJTquBpIJiAefpBVn3mEijYji1GkG+KvpKrVFUE2mbVqksSDKRjZOU6L1fFjaCGK13lB0vz1j5CNDKcUSc5Gj+Kv2iqV2Go1mcAb3lmlVsNZlwSGpNl3DYvNoRYy8hmV+MH8MVPHnmJhxfwUU0u2baiPM1OIjmIdcYDMcGbUkWiZk4ukCb316X0h3xPQzMrYm5m4xZiUlRSqpqZEORzMI7QTNLnMwtPFFe81/x46TnmeX80w4o2pM55IVRBU5YpzoOQkqySiIRxMmhxJK1tpFpEQGaeAx2Vteel7zSxeNWw1vOeWHbYScoK7KwyOhVKmY3JjASAkhNmLsmBJASIjwNEhJBZEQixMEOEkgskJKZNURAjgRxJCBohlkhTk1hFhYUCFMyaoekKseIdCRAYUUQBqYMxzMMokEDhdhrB1qpMUhEgZBlvvF8sW2kzEZoSQI0RItShzGgJpAPkxfLhWiSMVA/lxiohHgHgIZmA2kDUiaCaOhNk2qQTPHaCaaRhtks14zgbGRpbxq31CD7BdEayjkRLV+8oV5ciY0f/9k=)" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
      // </svg>
    },
    { value: "Kochi", label: "Kochi" },
    { value: "Kolkata", label: "Kolkata" },
  ];

  const onClickNoOfPass = (val) => {
    setTravellers(val);
  };
  const handleSubmit = () => {
    navigate("/flights", {
      state: {
        from,
        to,
        departure,
        retrn,
        travellers,
        selectedButtonColor,
        openTravellers,
        togglePassengerColor,
      },
    });
  };
  const MULTICITYHANDLER = () => {
    setOneWay("");
    setRoundTrip("");
  };
  const ROUNDTRIP = () => {
    setMultiCity("");
    setOneWay("");
    // setNewCity("")
  };

  const ONEWAY = (e) => {
    setMultiCity("");
    setRoundTrip("");
    // setNewCity("")
  };
  const HANDLEADD = () => {
    const newcity = [...newCity, []];
    setNewCity(newcity);
  };
  const DELETEHANDLER = (i) => {
    const deletenewcity = [...newCity];
    deletenewcity.splice(i, 1);
    setNewCity(deletenewcity);
  };
  if (select === true) {
    // setSelect()
  }
  if (select === false) {
    setSelect(null);
  }
  const FROMHANDLER = (e) => {
    setSelect(false);
    setFrom(e.value);
  };
  const ROUNDTRIPFROMHANDLER = (e) => {
    setSelectOne(false);
    setFrom(e.value);
  };
  const MULTICITYFROMHANDLER = (e) => {
    setSelectOne(false);
    setFrom(e.value);
  };
  const ANOTHERCITYFROMHANDLER = (e) => {
    setSelectAnotherCity(false);
    setFrom(e.value);
  };
  const NEWCITYFROMHANDLER = (e) => {
    setSelectNewCity(false);
    setFrom(e.value);
  };
  console.log(from);
  const TOHANDLER = (e) => {
    setSelectTo(false);
    setTo(e.value);
  };
  console.log("toooo", to);

  if (!select) {
  }
  return (
    <div className={styles.flight_wrapper}>
      {/* <Container className={styles.mobilesection}> */}
      <Row className={styles.mobilesectionrow}>
        <Col className="colfooter">
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              size="xl"
              style={{ marginTop: "15px", marginLeft: "9px",marginBottom:"10px" }}
            />
            <br />
            <b style={{ marginBottom: "15px", marginTop: "-15px" }}>Flights</b>
          </Link>
        </Col>
        <Col className="colfooter">
          <Link
            to="/mytrips"
            style={{ color: "black", textDecoration: "none" }}
          >
            <FontAwesomeIcon
              icon={faHotel}
              size="xl"
              style={{ marginTop: "15px", marginLeft: "10px" ,marginBottom:"10px"}}
            />
            <br />
            <b style={{ marginBottom: "15px", marginTop: "-15px" }}>Hotels</b>
          </Link>
        </Col>
        <Col className="colfooter">
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <FontAwesomeIcon
              icon={faBus}
              size="xl"
              style={{ marginTop: "15px", marginLeft: "10px" ,marginBottom:"10px"}}
            />
            <br />
            <b style={{ marginBottom: "15px", marginTop: "-15px" }}>Buses</b>
          </Link>
        </Col>
        <Col className="colfooter">
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <FontAwesomeIcon
              icon={faParachuteBox}
              size="xl"
              style={{ marginTop: "15px", marginLeft: "10px",marginBottom:"10px" }}
            />
            <br />
            <b style={{ marginBottom: "15px", marginTop: "-15px" }}>Holiday Packages</b>
          </Link>
        </Col>
      </Row>
      {/* </Container> */}
      <div className={styles.flight_container}>
        <div className={styles.tripInternational}>
          <div className={styles.multiple_trip}>
            <div className={styles.orm}>
              <Button
                className="radiobutton"
                style={{ border: "none" }}
                variant=""
              >
                <input
                  type="radio"
                  value="select"
                  name="select"
                  className="onewayinput"
                  onChange={ONEWAY}
                  onClick={() => setOneWay(true)}
                />
                <b className="onewaytitle">ONE WAY</b>
              </Button>
            </div>
            <div>
              <Button
                className="radiobutton1"
                style={{ border: "none" }}
                variant=""
              >
                <input
                  type="radio"
                  className="onewaytitle"
                  value="select1"
                  name="select"
                  onChange={ROUNDTRIP}
                  onClick={() => setRoundTrip(true)}
                />
                <span className="onewaytitle">ROUND TRIP</span>
              </Button>
            </div>
            <div>
              <Button
                className="radiobutton2"
                style={{ border: "none" }}
                variant=""
              >
                <input
                  type="radio"
                  className="onewaytitle"
                  value="select2"
                  name="select"
                  onClick={() => setMultiCity(true)}
                  onChange={MULTICITYHANDLER}
                />
                <span className="onewaytitle">MULTI CITY</span>
              </Button>
            </div>
          </div>
          <div className={styles.book}>
            <span>Book International and Domestic Flights</span>
          </div>
        </div>

        {/* location of from and to  including date and passenger starts  */}
        {/* one way button */}
        {oneWay && (
          <>
            <div className={styles.bookingSearch}>
              <div className={styles.fromToConnecting}>
                <div className={styles.fromTo}>
                  <div className={styles.from}>
                    <Col
                      style={{ borderColor: "black", width: "" }}
                      className={styles.fromcol}
                      onClick={() => setSelect(!select)}
                    >
                      <Row>
                        <span
                          style={{
                            marginLeft: "1rem",
                            fontWeight: "700",
                            fontSize: "14px",
                            color: "#4a4a4a",
                          }}
                        >
                          FROM
                        </span>
                      </Row>
                      <Row>
                        <span
                          style={{
                            marginBottom: "-30px",
                            marginLeft: "1rem",
                            fontWeight: "900",
                            fontSize: "18px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {from}
                        </span>
                        <br />
                        <p
                          style={{
                            marginLeft: "1rem",
                            marginBottom: "10px",
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          International Airport
                        </p>
                      </Row>
                      {select ? (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            menuIsOpen={true}
                            // onChange={() =>setSelect(null)}
                            onChange={FROMHANDLER}
                            className={styles.select}
                            value={options.find(function (option) {
                              return option.value === from;
                            })}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => true,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              //  SelectContainer:()=> null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                            getOptionLabel={(e) => (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {e.icon}
                                <span style={{ marginLeft: 5 }}>{e.label}</span>
                              </div>
                            )}
                          />
                        </>
                      ) : (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            // onChange={() =>setSelect(null)}
                            onChange={FROMHANDLER}
                            className={styles.select}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => null,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              SelectContainer: () => null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                          />
                        </>
                      )}
                    </Col>
                  </div>
                  <div className={styles.connectingIcon}>
                    <ConnectingAirportsIcon fontSize="large" color="grey" />
                  </div>
                  <div className={styles.to}>
                    <Col
                      style={{ borderColor: "black", width: "" }}
                      className={styles.fromcol}
                      onClick={() => setSelectTo(!selectTo)}
                    >
                      <Row>
                        <span
                          style={{
                            marginLeft: "1rem",
                            fontWeight: "700",
                            fontSize: "14px",
                            color: "#4a4a4a",
                          }}
                        >
                          TO
                        </span>
                      </Row>
                      <Row>
                        <span
                          style={{
                            marginBottom: "-30px",
                            marginLeft: "1rem",
                            fontWeight: "900",
                            fontSize: "18px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {to}
                        </span>
                        <br />
                        <p
                          style={{
                            marginLeft: "1rem",
                            marginBottom: "10px",
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          International Airport
                        </p>
                      </Row>
                      {selectTo ? (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            menuIsOpen={true}
                            // onChange={() =>setSelect(null)}
                            onChange={TOHANDLER}
                            className={styles.select}
                            value={options.find(function (option) {
                              return option.value === from;
                            })}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => true,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              //  SelectContainer:()=> null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            // onChange={() =>setSelect(null)}
                            onChange={TOHANDLER}
                            className={styles.select}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => null,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              SelectContainer: () => null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                          />
                        </>
                      )}

                      {/* <Select options={options} styles={{width:"100%"}} /> */}
                    </Col>
                  </div>
                </div>
              </div>

              {/* departure and return date start */}
              <div className={styles.DepRetContainer}>
                {/* departure date starts */}
                <div style={{ width: "96%", marginTop: "-5px" }}>
                  {/* <Col
                    style={{ borderColor: "black", width: "" }}
                    className={styles.fromcol}
                  > */}
                  <FormControl sx={{ width: "100%" }}>
                    <LocalizationProvider
                      sx={{ width: "100%" }}
                      dateAdapter={AdapterDateFns}
                    >
                      <DatePicker
                        label="DEPARTURE"
                        value={departure}
                        onChange={(newValue) => {
                          setDeparture(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            defaultValue="Normal"
                            size="4x"
                            {...params}
                            sx={{
                              "& .MuiInputBase-input": {
                                height: "47px",
                                // border:"1px solid lightgrey",
                                borderRadius: "10px",
                                width: "70%",
                              },
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </FormControl>
                  {/* </Col> */}
                </div>
              </div>
              {/* return */}
              <div className={styles.DepRetContainer}>
                {/* departure date starts */}
                <div style={{ width: "96%" }} className={styles.RetContainer}>
                  <FormControl sx={{ width: "100%" }}>
                    <LocalizationProvider
                      sx={{ width: "100%" }}
                      dateAdapter={AdapterDateFns}
                    >
                      <DatePicker
                        label="RETURN"
                        value={retrn}
                        onChange={(newValue) => {
                          setRetrn(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            sx={{
                              "& .MuiInputBase-input": {
                                height: "47px",
                                // border:"1px solid lightgrey",
                                borderRadius: "10px",
                              },
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </div>
                {/* departure date end */}

                {/* return date starts (just for ui purpose)*/}
                {/* <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Return"
                  value={retrn}
                  onChange={(newValue) => {
                    setRetrn(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div> */}
                {/* return date starts (just for ui purpose)*/}
              </div>

              {/* departure and return date end */}

              {/* number of travellers start */}

              <div className={styles.travellerContainer}>
                <div onClick={onClickModal}>
                  <div className={styles.travellersText}>TRAVELLERS</div>
                  <div
                    className={styles.noOfTraveller}
                    style={{ marginTop: "-6px" }}
                  >
                    <span>{travellers}</span>
                    {travellers > 1 ? "Travellers" : ""}
                  </div>
                </div>

                <div
                  className={
                    openTravellers ? styles.traveller_modal : styles.noDisplay
                  }
                >
                  <div className={styles.adultChild}>ADULTS (12y +)</div>
                  <div className={styles.passengerButtonContainer}>
                    {arr.map((val) => (
                      <div
                        key={val}
                        className={`${
                          selectedButtonColor === val
                            ? styles.clickPassenger
                            : styles.passengerButton
                        }`}
                        onClick={() => {
                          setTogglePassengerColor(!togglePassengerColor);
                          onClickNoOfPass(val);
                          setSelectedButtonColor(val);
                        }}
                      >
                        {val}
                      </div>
                    ))}
                  </div>

                  {/* for children and inf */}
                  <div className={styles.infantChildren}>
                    <div>
                      <div className={styles.adultChild}>
                        CHILDREN (2y - 12y )
                      </div>
                      <div className={styles.passengerButtonContainer}>
                        {ar1.map((val) => (
                          <div
                            key={val}
                            className={
                              val === 0
                                ? styles.clickPassenger
                                : styles.passengerButton
                            }
                            onClick={() => {
                              setTogglePassengerColor(!togglePassengerColor);
                              onClickNoOfPass(val);
                            }}
                          >
                            {val}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className={styles.adultChild}>
                        INFANTS (below 2y)
                      </div>
                      <div className={styles.passengerButtonContainer}>
                        {ar2.map((val) => (
                          <div
                            key={val}
                            className={
                              val === 0
                                ? styles.clickPassenger
                                : styles.passengerButton
                            }
                            onClick={() => {
                              setTogglePassengerColor(!togglePassengerColor);
                              onClickNoOfPass(val);
                            }}
                          >
                            {val}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* for children and inf */}

                  <div className={styles.modalApplyText} onClick={onClickModal}>
                    <div>Apply</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* round trip button */}
        {roundTrip && (
          <>
            <div className={styles.bookingSearch}>
              <div className={styles.fromToConnecting}>
                <div className={styles.fromTo}>
                  <div className={styles.from}>
                    <Col
                      style={{ borderColor: "black", width: "" }}
                      className={styles.fromcol}
                      onClick={() => setSelectOne(!selectOne)}
                    >
                      <Row>
                        <span
                          style={{
                            marginLeft: "1rem",
                            fontWeight: "700",
                            fontSize: "14px",
                            color: "#4a4a4a",
                          }}
                        >
                          FROM
                        </span>
                      </Row>
                      <Row>
                        <span
                          style={{
                            marginBottom: "-30px",
                            marginLeft: "1rem",
                            fontWeight: "900",
                            fontSize: "18px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {from}
                        </span>
                        <br />
                        <p
                          style={{
                            marginLeft: "1rem",
                            marginBottom: "10px",
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          International Airport
                        </p>
                      </Row>
                      {selectOne ? (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            menuIsOpen={true}
                            // onChange={() =>setSelect(null)}
                            onChange={ROUNDTRIPFROMHANDLER}
                            className={styles.select}
                            value={options.find(function (option) {
                              return option.value === from;
                            })}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => true,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              //  SelectContainer:()=> null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            // onChange={() =>setSelect(null)}
                            onChange={FROMHANDLER}
                            className={styles.select}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => null,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              SelectContainer: () => null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                          />
                        </>
                      )}
                    </Col>
                  </div>
                  <div className={styles.connectingIcon}>
                    <ConnectingAirportsIcon fontSize="large" color="grey" />
                  </div>
                  <div className={styles.to}>
                    <Col
                      style={{ borderColor: "black", width: "" }}
                      className={styles.fromcol}
                      onClick={() => setSelectTo(!selectTo)}
                    >
                      <Row>
                        <span
                          style={{
                            marginLeft: "1rem",
                            fontWeight: "700",
                            fontSize: "14px",
                            color: "#4a4a4a",
                          }}
                        >
                          TO
                        </span>
                      </Row>
                      <Row>
                        <span
                          style={{
                            marginBottom: "-30px",
                            marginLeft: "1rem",
                            fontWeight: "900",
                            fontSize: "18px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {to}
                        </span>
                        <br />
                        <p
                          style={{
                            marginLeft: "1rem",
                            marginBottom: "10px",
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          International Airport
                        </p>
                      </Row>
                      {selectTo ? (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            // onChange={() =>setSelect(null)}
                            menuIsOpen={true}
                            onChange={TOHANDLER}
                            className={styles.select}
                            value={options.find(function (option) {
                              return option.value === from;
                            })}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => true,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              //  SelectContainer:()=> null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            // onChange={() =>setSelect(null)}
                            onChange={TOHANDLER}
                            menuIsOpen={true}
                            className={styles.select}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => null,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              SelectContainer: () => null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                          />
                        </>
                      )}

                      {/* <Select options={options} styles={{width:"100%"}} /> */}
                    </Col>
                  </div>
                </div>
              </div>

              {/* departure and return date start */}
              <div className={styles.DepRetContainer}>
                {/* departure date starts */}
                <div style={{ width: "96%", marginTop: "-5px" }}>
                  <FormControl sx={{ width: "100%" }}>
                    <LocalizationProvider
                      sx={{ width: "100%" }}
                      dateAdapter={AdapterDateFns}
                    >
                      <DatePicker
                        label="DEPARTURE"
                        value={departure}
                        onChange={(newValue) => {
                          setDeparture(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            sx={{
                              "& .MuiInputBase-input": {
                                height: "47px",
                                // border:"1px solid lightgrey",
                                borderRadius: "10px",
                              },
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </div>
                {/* departure date end */}

                {/* return date starts (just for ui purpose)*/}
                {/* <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Return"
                  value={retrn}
                  onChange={(newValue) => {
                    setRetrn(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div> */}
                {/* return date starts (just for ui purpose)*/}
              </div>
              {/* return */}
              <div className={styles.DepRetContainer}>
                {/* departure date starts */}
                <div
                  style={{ width: "96%", marginTop: "" }}
                  className={styles.RetContainer}
                >
                  <FormControl sx={{ width: "100%" }}>
                    <LocalizationProvider
                      sx={{ width: "100%" }}
                      dateAdapter={AdapterDateFns}
                    >
                      <DatePicker
                        label="RETURN"
                        value={retrn}
                        onChange={(newValue) => {
                          setRetrn(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            sx={{
                              "& .MuiInputBase-input": {
                                height: "47px",
                                // border:"1px solid lightgrey",
                                borderRadius: "10px",
                              },
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </div>
                {/* departure date end */}

                {/* return date starts (just for ui purpose)*/}
                {/* <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Return"
                  value={retrn}
                  onChange={(newValue) => {
                    setRetrn(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div> */}
                {/* return date starts (just for ui purpose)*/}
              </div>

              {/* departure and return date end */}

              {/* number of travellers start */}
              <div className={styles.travellerContainer}>
                <div onClick={onClickModal}>
                  <div className={styles.travellersText}>TRAVELLERS</div>
                  <div
                    className={styles.noOfTraveller}
                    style={{ marginTop: "-6px" }}
                  >
                    <span>{travellers}</span>
                    {travellers > 1 ? "Travellers" : ""}
                  </div>
                </div>

                <div
                  className={
                    openTravellers ? styles.traveller_modal : styles.noDisplay
                  }
                >
                  <div className={styles.adultChild}>ADULTS (12y +)</div>
                  <div className={styles.passengerButtonContainer}>
                    {arr.map((val) => (
                      <div
                        key={val}
                        className={`${
                          selectedButtonColor === val
                            ? styles.clickPassenger
                            : styles.passengerButton
                        }`}
                        onClick={() => {
                          setTogglePassengerColor(!togglePassengerColor);
                          onClickNoOfPass(val);
                          setSelectedButtonColor(val);
                        }}
                      >
                        {val}
                      </div>
                    ))}
                  </div>

                  {/* for children and inf */}
                  <div className={styles.infantChildren}>
                    <div>
                      <div className={styles.adultChild}>
                        CHILDREN (2y - 12y )
                      </div>
                      <div className={styles.passengerButtonContainer}>
                        {ar1.map((val) => (
                          <div
                            key={val}
                            className={
                              val === 0
                                ? styles.clickPassenger
                                : styles.passengerButton
                            }
                            onClick={() => {
                              setTogglePassengerColor(!togglePassengerColor);
                              onClickNoOfPass(val);
                            }}
                          >
                            {val}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className={styles.adultChild}>
                        INFANTS (below 2y)
                      </div>
                      <div className={styles.passengerButtonContainer}>
                        {ar1.map((val) => (
                          <div
                            key={val}
                            className={
                              val === 0
                                ? styles.clickPassenger
                                : styles.passengerButton
                            }
                            onClick={() => {
                              setTogglePassengerColor(!togglePassengerColor);
                              onClickNoOfPass(val);
                            }}
                          >
                            {val}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* for children and inf */}

                  <div className={styles.modalApplyText} onClick={onClickModal}>
                    <div>Apply</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* multi city */}
        {multiCity && (
          <>
            <div className={styles.bookingSearch}>
              <div className={styles.fromToConnecting}>
                <div className={styles.fromTo}>
                  <div className={styles.from}>
                    <Col
                      style={{ borderColor: "black", width: "" }}
                      className={styles.fromcol}
                      onClick={() => setSelectTwo(!selectTwo)}
                    >
                      <Row>
                        <span
                          style={{
                            marginLeft: "1rem",
                            fontWeight: "700",
                            fontSize: "14px",
                            color: "#4a4a4a",
                          }}
                        >
                          FROM
                        </span>
                      </Row>
                      <Row>
                        <span
                          style={{
                            marginBottom: "-30px",
                            marginLeft: "1rem",
                            fontWeight: "900",
                            fontSize: "18px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {from}
                        </span>
                        <br />
                        <p
                          style={{
                            marginLeft: "1rem",
                            marginBottom: "10px",
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          International Airport
                        </p>
                      </Row>
                      {selectTwo ? (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            menuIsOpen={true}
                            // onChange={() =>setSelect(null)}
                            onChange={MULTICITYFROMHANDLER}
                            className={styles.select}
                            value={options.find(function (option) {
                              return option.value === from;
                            })}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => true,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              //  SelectContainer:()=> null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            // onChange={() =>setSelect(null)}
                            onChange={FROMHANDLER}
                            className={styles.select}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => null,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              SelectContainer: () => null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                          />
                        </>
                      )}
                    </Col>
                  </div>
                  <div className={styles.connectingIcon}>
                    <ConnectingAirportsIcon fontSize="large" color="grey" />
                  </div>
                  <div className={styles.to}>
                    <Col
                      style={{ borderColor: "black", width: "" }}
                      className={styles.fromcol}
                      onClick={() => setSelectTo(!selectTo)}
                    >
                      <Row>
                        <span
                          style={{
                            marginLeft: "1rem",
                            fontWeight: "700",
                            fontSize: "14px",
                            color: "#4a4a4a",
                          }}
                        >
                          TO
                        </span>
                      </Row>
                      <Row>
                        <span
                          style={{
                            marginBottom: "-30px",
                            marginLeft: "1rem",
                            fontWeight: "900",
                            fontSize: "18px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {to}
                        </span>
                        <br />
                        <p
                          style={{
                            marginLeft: "1rem",
                            marginBottom: "10px",
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          International Airport
                        </p>
                      </Row>
                      {selectTo ? (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            // onChange={() =>setSelect(null)}
                            onChange={TOHANDLER}
                            menuIsOpen={true}
                            className={styles.select}
                            value={options.find(function (option) {
                              return option.value === from;
                            })}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => true,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              //  SelectContainer:()=> null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            // onChange={() =>setSelect(null)}
                            onChange={TOHANDLER}
                            className={styles.select}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => null,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              SelectContainer: () => null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                          />
                        </>
                      )}

                      {/* <Select options={options} styles={{width:"100%"}} /> */}
                    </Col>
                  </div>
                </div>
              </div>

              {/* departure and return date start */}
              <div className={styles.DepRetContainer}>
                {/* departure date starts */}
                <div style={{ width: "96%", marginTop: "-4px" }}>
                  <FormControl sx={{ width: "100%" }}>
                    <LocalizationProvider
                      sx={{ width: "100%" }}
                      dateAdapter={AdapterDateFns}
                    >
                      <DatePicker
                        label="DEPARTURE"
                        value={departure}
                        onChange={(newValue) => {
                          setDeparture(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            sx={{
                              "& .MuiInputBase-input": {
                                height: "47px",
                                // border:"1px solid lightgrey",
                                borderRadius: "10px",
                              },
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </div>
                {/* departure date end */}

                {/* return date starts (just for ui purpose)*/}
                {/* <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Return"
                  value={retrn}
                  onChange={(newValue) => {
                    setRetrn(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div> */}
                {/* return date starts (just for ui purpose)*/}
              </div>
              {/* return */}

              {/* departure and return date end */}

              {/* number of travellers start */}
              <div
                className={styles.travellerContainermulticity}
                // style={{  left: "-30px" }}
              >
                <div onClick={onClickModal}>
                  <div className={styles.travellersText}>TRAVELLERS</div>
                  <div
                    className={styles.noOfTraveller}
                    style={{ marginTop: "-6px" }}
                  >
                    <span>{travellers}</span>
                    {travellers > 1 ? "Travellers" : ""}
                  </div>
                </div>

                <div
                  className={
                    multiCity && openTravellers
                      ? styles.traveller_modalmulti
                      : styles.noDisplay
                  }
                >
                  <div className={styles.adultChild}>ADULTS (12y +)</div>
                  <div className={styles.passengerButtonContainer}>
                    {arr.map((val) => (
                      <div
                        key={val}
                        className={`${
                          selectedButtonColor === val
                            ? styles.clickPassenger
                            : styles.passengerButton
                        }`}
                        onClick={() => {
                          setTogglePassengerColor(!togglePassengerColor);
                          onClickNoOfPass(val);
                          setSelectedButtonColor(val);
                        }}
                      >
                        {val}
                      </div>
                    ))}
                  </div>

                  {/* for children and inf */}
                  <div className={styles.infantChildren}>
                    <div>
                      <div className={styles.adultChild}>
                        CHILDREN (2y - 12y )
                      </div>
                      <div className={styles.passengerButtonContainer}>
                        {ar1.map((val) => (
                          <div
                            key={val}
                            className={
                              val === 0
                                ? styles.clickPassenger
                                : styles.passengerButton
                            }
                            onClick={() => {
                              setTogglePassengerColor(!togglePassengerColor);
                              onClickNoOfPass(val);
                            }}
                          >
                            {val}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className={styles.adultChild}>
                        INFANTS (below 2y)
                      </div>
                      <div className={styles.passengerButtonContainer}>
                        {ar1.map((val) => (
                          <div
                            key={val}
                            className={
                              val === 0
                                ? styles.clickPassenger
                                : styles.passengerButton
                            }
                            onClick={() => {
                              setTogglePassengerColor(!togglePassengerColor);
                              onClickNoOfPass(val);
                            }}
                          >
                            {val}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* for children and inf */}

                  <div className={styles.modalApplyText} onClick={onClickModal}>
                    <div>Apply</div>
                  </div>
                </div>
              </div>
            </div>
            {/* add another city */}
            <div className={styles.bookingSearch} style={{ marginTop: "10px" }}>
              <div className={styles.fromToConnecting}>
                <div className={styles.fromTo}>
                  <div className={styles.from}>
                    <Col
                      style={{ borderColor: "black", width: "" }}
                      className={styles.fromcol}
                      onClick={() => setSelectAnotherCity(!selectAnotherCity)}
                    >
                      <Row>
                        <span
                          style={{
                            marginLeft: "1rem",
                            fontWeight: "700",
                            fontSize: "14px",
                            color: "#4a4a4a",
                          }}
                        >
                          FROM
                        </span>
                      </Row>
                      <Row>
                        <span
                          style={{
                            marginBottom: "-30px",
                            marginLeft: "1rem",
                            fontWeight: "900",
                            fontSize: "18px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {from}
                        </span>
                        <br />
                        <p
                          style={{
                            marginLeft: "1rem",
                            marginBottom: "10px",
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          International Airport
                        </p>
                      </Row>
                      {selectAnotherCity ? (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            menuIsOpen={true}
                            // onChange={() =>setSelect(null)}
                            onChange={ANOTHERCITYFROMHANDLER}
                            className={styles.select}
                            value={options.find(function (option) {
                              return option.value === from;
                            })}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => true,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              //  SelectContainer:()=> null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            // onChange={() =>setSelect(null)}
                            onChange={ANOTHERCITYFROMHANDLER}
                            className={styles.select}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => null,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              SelectContainer: () => null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                          />
                        </>
                      )}
                    </Col>
                  </div>
                  <div className={styles.connectingIcon}>
                    <ConnectingAirportsIcon fontSize="large" color="grey" />
                  </div>
                  <div className={styles.to}>
                    <Col
                      style={{ borderColor: "black", width: "" }}
                      className={styles.fromcol}
                      onClick={() => setSelectTo(!selectTo)}
                    >
                      <Row>
                        <span
                          style={{
                            marginLeft: "1rem",
                            fontWeight: "700",
                            fontSize: "14px",
                            color: "#4a4a4a",
                          }}
                        >
                          TO
                        </span>
                      </Row>
                      <Row>
                        <span
                          style={{
                            marginBottom: "-30px",
                            marginLeft: "1rem",
                            fontWeight: "900",
                            fontSize: "18px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {to}
                        </span>
                        <br />
                        <p
                          style={{
                            marginLeft: "1rem",
                            marginBottom: "10px",
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          International Airport
                        </p>
                      </Row>
                      {selectTo ? (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            // onChange={() =>setSelect(null)}
                            onChange={TOHANDLER}
                            menuIsOpen={true}
                            className={styles.select}
                            value={options.find(function (option) {
                              return option.value === from;
                            })}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => true,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              //  SelectContainer:()=> null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <Select
                            options={options}
                            styles={{ width: "100%" }}
                            // onChange={() =>setSelect(null)}
                            onChange={TOHANDLER}
                            className={styles.select}
                            components={{
                              // SelectContainer:()=>false
                              // Menu: () => null,               // Remove menu
                              // MenuList: () => null,           // Remove menu list
                              // DropdownIndicator: () => null,
                              // Remove dropdown icon
                              SelectContainer: () => null,
                              IndicatorSeparator: () => null, // Remove separator
                            }}
                          />
                        </>
                      )}

                      {/* <Select options={options} styles={{width:"100%"}} /> */}
                    </Col>
                  </div>
                </div>
              </div>
              {/* departure and return date start */}
              <div
                className={styles.DepRetContainer}
                style={{ marginRight: "" }}
              >
                {/* departure date starts */}
                <div style={{ width: "96%", marginTop: "-5px" }}>
                  <FormControl sx={{ width: "100%" }}>
                    <LocalizationProvider
                      sx={{ width: "100%" }}
                      dateAdapter={AdapterDateFns}
                    >
                      <DatePicker
                        label="DEPARTURE"
                        value={departure}
                        onChange={(newValue) => {
                          setDeparture(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            sx={{
                              "& .MuiInputBase-input": {
                                height: "47px",
                                // border:"1px solid lightgrey",
                                borderRadius: "10px",
                              },
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </div>
                {/* departure date end */}

                {/* return date starts (just for ui purpose)*/}
                {/* <div>
              
            </div> */}
                {/* return date starts (just for ui purpose)*/}
              </div>
              <div
                style={{
                  // borderColor: "black",
                  display: "grid",
                  justifyContent: "center",
                  paddingTop: "10px",
                }}
                className={styles.travellerContainermulticity}
              >
                <Button
                  style={{
                    height: "auto",
                    border: "none",
                    color: "green",
                    borderColor: "black",
                    fontFamily: "sans-serif",
                    display: "grid",
                    justifyContent: "center",
                  }}
                  onClick={() => HANDLEADD()}
                  variant=""
                  className={styles.addcitybtn}
                >
                  + ADD ANOTHER CITY
                </Button>
              </div>
              {/* return */}

              {/* departure and return date end */}

              {/* number of travellers start */}
            </div>
          </>
        )}
        {/* new city */}
        {multiCity &&
          newCity.map((data, i) => {
            return (
              <>
                <div
                  className={styles.bookingSearch}
                  style={{ marginTop: "10px" }}
                >
                  <div className={styles.fromToConnecting}>
                    <div className={styles.fromTo}>
                      <div className={styles.from}>
                        <Col
                          style={{ borderColor: "black", width: "" }}
                          className={styles.fromcol}
                          onClick={() => setSelectNewCity(!selectNewCity)}
                        >
                          <Row>
                            <span
                              style={{
                                marginLeft: "1rem",
                                fontWeight: "700",
                                fontSize: "14px",
                                color: "#4a4a4a",
                              }}
                            >
                              FROM
                            </span>
                          </Row>
                          <Row>
                            <span
                              style={{
                                marginBottom: "-30px",
                                marginLeft: "1rem",
                                fontWeight: "900",
                                fontSize: "18px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              {from}
                            </span>
                            <br />
                            <p
                              style={{
                                marginLeft: "1rem",
                                marginBottom: "10px",
                                fontSize: "14px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              International Airport
                            </p>
                          </Row>
                          {selectNewCity ? (
                            <>
                              <Select
                                options={options}
                                styles={{ width: "100%" }}
                                menuIsOpen={true}
                                // onChange={() =>setSelect(null)}
                                onChange={NEWCITYFROMHANDLER}
                                className={styles.select}
                                value={options.find(function (option) {
                                  return option.value === from;
                                })}
                                components={{
                                  // SelectContainer:()=>false
                                  // Menu: () => null,               // Remove menu
                                  // MenuList: () => true,           // Remove menu list
                                  // DropdownIndicator: () => null,
                                  // Remove dropdown icon
                                  //  SelectContainer:()=> null,
                                  IndicatorSeparator: () => null, // Remove separator
                                }}
                              />
                            </>
                          ) : (
                            <>
                              <Select
                                options={options}
                                styles={{ width: "100%" }}
                                // onChange={() =>setSelect(null)}
                                onChange={FROMHANDLER}
                                className={styles.select}
                                components={{
                                  // SelectContainer:()=>false
                                  // Menu: () => null,               // Remove menu
                                  // MenuList: () => null,           // Remove menu list
                                  // DropdownIndicator: () => null,
                                  // Remove dropdown icon
                                  SelectContainer: () => null,
                                  IndicatorSeparator: () => null, // Remove separator
                                }}
                              />
                            </>
                          )}
                        </Col>
                      </div>
                      <div className={styles.connectingIcon}>
                        <ConnectingAirportsIcon fontSize="large" color="grey" />
                      </div>
                      <div className={styles.to}>
                        <Col
                          style={{ borderColor: "black", width: "" }}
                          className={styles.fromcol}
                          onClick={() => setSelectTo(!selectTo)}
                        >
                          <Row>
                            <span
                              style={{
                                marginLeft: "1rem",
                                fontWeight: "700",
                                fontSize: "14px",
                                color: "#4a4a4a",
                              }}
                            >
                              TO
                            </span>
                          </Row>
                          <Row>
                            <span
                              style={{
                                marginBottom: "-30px",
                                marginLeft: "1rem",
                                fontWeight: "900",
                                fontSize: "18px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              {to}
                            </span>
                            <br />
                            <p
                              style={{
                                marginLeft: "1rem",
                                marginBottom: "10px",
                                fontSize: "14px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              International Airport
                            </p>
                          </Row>
                          {selectTo ? (
                            <>
                              <Select
                                options={options}
                                styles={{ width: "100%" }}
                                // onChange={() =>setSelect(null)}
                                onChange={TOHANDLER}
                                className={styles.select}
                                value={options.find(function (option) {
                                  return option.value === from;
                                })}
                                components={{
                                  // SelectContainer:()=>false
                                  // Menu: () => null,               // Remove menu
                                  // MenuList: () => true,           // Remove menu list
                                  // DropdownIndicator: () => null,
                                  // Remove dropdown icon
                                  //  SelectContainer:()=> null,
                                  IndicatorSeparator: () => null, // Remove separator
                                }}
                              />
                            </>
                          ) : (
                            <>
                              <Select
                                options={options}
                                styles={{ width: "100%" }}
                                // onChange={() =>setSelect(null)}
                                onChange={TOHANDLER}
                                menuIsOpen={true}
                                className={styles.select}
                                components={{
                                  // SelectContainer:()=>false
                                  // Menu: () => null,               // Remove menu
                                  // MenuList: () => null,           // Remove menu list
                                  // DropdownIndicator: () => null,
                                  // Remove dropdown icon
                                  SelectContainer: () => null,
                                  IndicatorSeparator: () => null, // Remove separator
                                }}
                              />
                            </>
                          )}

                          {/* <Select options={options} styles={{width:"100%"}} /> */}
                        </Col>
                      </div>
                    </div>
                  </div>
                  {/* departure and return date start */}
                  <div
                    className={styles.DepRetContainer}
                    style={{ marginRight: "auto" }}
                  >
                    {/* departure date starts */}
                    <div style={{ width: "96%", marginTop: "-5px" }}>
                      <FormControl sx={{ width: "100%" }}>
                        <LocalizationProvider
                          sx={{ width: "100%" }}
                          dateAdapter={AdapterDateFns}
                        >
                          <DatePicker
                            label="DEPARTURE"
                            value={departure}
                            onChange={(newValue) => {
                              setDeparture(newValue);
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                sx={{
                                  "& .MuiInputBase-input": {
                                    height: "47px",
                                    // border:"1px solid lightgrey",
                                    borderRadius: "10px",
                                  },
                                }}
                              />
                            )}
                          />
                        </LocalizationProvider>
                      </FormControl>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      justifyContent: "center",
                      paddingTop: "15px",
                    }}
                    className={styles.travellerContainermulticity}
                  >
                    <Button
                      style={{
                        height: "30px",
                        borderRadius: "5px",
                        borderColor: "black",
                        color: "red",
                        fontFamily: "sans-serif",
                        fontWeight: "600",
                        fontSize: "14px",
                        display: "grid",
                        justifyContent: "center",
                      }}
                      onClick={() => DELETEHANDLER(i)}
                      variant=""
                    >
                      X REMOVE
                    </Button>
                  </div>
                  {/* return */}

                  {/* departure and return date end */}

                  {/* number of travellers start */}
                </div>
              </>
            );
          })}
        {/* location of departure and arrival  including date and passenger end  */}

        <FareTypes />
      </div>
      <div className={styles.buttonContainer}>
        <div type="submit" onClick={handleSubmit}>
          SEARCH
        </div>
      </div>
    </div>
  );
};

export default FlightHome;
