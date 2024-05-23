import React, { useState } from 'react'

export default function Checkbox() {
    const listJob = [
        { id: 0, job: "Java backend developer" },
        { id: 1, job: "Javascript backend developer" },
        { id: 2, job: "C# backend developer" },
        { id: 3, job: "Python backend developer" },
    ]
    // Mang danh sach cong viec duoc chon
    const [selectedJob, setSelectedJob] = useState([]);
    console.log(selectedJob);
    //Ham xu ly check box

    const handleCheck = (id) => {
        // kiem tra id da ton tai trong mang chua
        if (selectedJob.includes(id)) {
            // neu nhu id da ton tai trong mang thi loc ra nhung gia tri khac voi id duoc check
            selectedJob(selectedJob.filter(job => job !== id));
        } else {
                // neu khong ton tai thi push vao trong mang
                setSelectedJob([...selectedJob, id])
        }

    }

    return (
        <div>
            <div style={{ textAlign: "left" }}>
                {listJob.map((job, id) => (
                    <div key={id}>
                        <input type="checkbox" onChange={() => handleCheck(id)}
                            checked={selectedJob.includes(job.id)} />{job.job}
                    </div>

                ))}
            </div>
        </div>
    )
}
