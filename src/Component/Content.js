import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Label } from "./Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { getDays } from "../utils/functions";
import _ from "lodash";

const Content = () => {


    const [data, setData] = useState([]);
    const [count, setCount] = useState(1)
    const [loader, setLoader] = useState(false)

    const contentRef = useRef(null)

    const fetchData = async (forPage) => {
        setLoader(true);

        const responseData = await axios.get("https://api.github.com/repos/facebook/react/issues", { params: { page: forPage } });

        if (data) {
            setData([...data, ...responseData?.data]);
            setLoader(false);
        }
        else {
            throw new Error("Not Found")
        }

    }

    useEffect(() => {
        fetchData(1)
    }, [])

    const handleScroll = _.debounce((e) => {
        if ((e.target.offsetHeight + e.target.scrollTop) >= e.target.scrollHeight - 10) {
            fetchData(count + 1);
            setCount(count + 1)
        }
    }, 500)

    return (
        <div>

            <div className="content-full-section-wrapper" onScroll={handleScroll}>
                <div className="content-top-section">
                    <div className="content-top-left-section">
                        <div className="content-top-left-section-tab"> 636 open</div>
                        <div><FontAwesomeIcon icon={faCheck} />  1497 closed</div>
                    </div>
                    <div className="content-top-right-section">
                        <div className="content-top-right-tabs">Author <FontAwesomeIcon icon={faCaretDown} /></div>
                        <div className="content-top-right-tabs">Label <FontAwesomeIcon icon={faCaretDown} /></div>
                        <div className="content-top-right-tabs mobile-removal">Project <FontAwesomeIcon icon={faCaretDown} /></div>
                        <div className="content-top-right-tabs mobile-removal">Milestones <FontAwesomeIcon icon={faCaretDown} /></div>
                        <div className="content-top-right-tabs">Assignee <FontAwesomeIcon icon={faCaretDown} /></div>
                        <div className="content-top-right-tabs">Sort <FontAwesomeIcon icon={faCaretDown} /></div>
                    </div>
                </div>


                <div className="content-bottom-section" ref={contentRef}>


                    <div className="content-bottom-issues-container-details">  {data && data.map((elem) => {
                        const { title, labels, number, user, created_at } = elem;

                        const date = getDays(created_at)

                        return <div key={elem.id} className="issue-heading-wrapper">

                            <div className="issue-heading">
                                <span></span>{title}

                                {labels && labels.map((label) => {
                                    return <Label key={label?.id} name={label?.name} color={label?.color} />

                                })
                                }
                            </div>
                            <div className="created-timeline"> #{number} opened {`${date ?? ""} days ago`}  by {user?.login ?? ""}   </div>


                        </div>

                    })} </div>


                </div>

            </div>

            {loader ? <FontAwesomeIcon icon={faSpinner} spin size="6x" /> : ""}

        </div>

    );
};

export default Content;
