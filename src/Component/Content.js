import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { Label } from "./Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { getDays } from "../utils/functions";

const Content = () => {


    const [data, setData] = useState();
    const [count, setCount] = useState(1)
    const [loader, setLoader] = useState(false)

    const fetchData = async () => {
        setLoader(true);

        const data = await axios.get("https://api.github.com/repos/facebook/react/issues", { params: { page: count } });

        if (data) {
            setData(data?.data);
            setLoader(false);
        }
        else {
            throw new Error("Not Found")
        }

    }

    useEffect(() => {

        if (count < 1) {

            setCount(1)
            return
        }

        fetchData()

    }, [count])

    if (loader) {
        return <FontAwesomeIcon icon={faSpinner} spin size="6x" />
    }
    return (
        <div>

            <div className="content-full-section-wrapper">
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


                <div className="content-bottom-section">


                    <div className="content-bottom-issues-container-details">  {data && data.map((elem) => {
                        const { title, labels, number, user, created_at } = elem;

                        const date = getDays(created_at)

                        return <div className="issue-heading-wrapper">

                            <div className="issue-heading">
                                <span></span>{title}

                                {labels && labels.map((label) => {
                                    return <Label name={label?.name} color={label?.color} />

                                })
                                }
                            </div>
                            <div className="created-timeline"> #{number} opened {`${date ?? ""} days ago`}  by {user?.login ?? ""}   </div>


                        </div>

                    })} </div>


                </div>

            </div>
            <div className="nav-buttons"><div className="button" onClick={() => setCount(count - 1)}>Previous</div> <div className="button" onClick={() => setCount(count + 1)}>Next</div> </div>
        </div>

    );
};

export default Content;
