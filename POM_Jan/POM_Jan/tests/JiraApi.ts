

import axios from "axios"


const endpoint="https://manual-testing-demoproject.atlassian.net/rest/api/2/issue"


async function createIssue(summary: string, description: string) {



    const response = await axios.post(endpoint,
        {



            "fields": {
                "project": {
                    "key": "JAN"
                },
                "summary": summary,
                "description":description,
                "issuetype": {
                    "name": "Bug"
                }
            }
        },{
            headers:{
                "Content-Type":"application/json"
            },
            auth:{
                "username":"ravindranr90@gmail.com",
                "password":"ATATT3xFfGF0NYoH15dhnegUbqR2hVLhUEXiafw_tQ_8-CZ6glbvUDgJTfCdwW-1kM8EhciHtPQVtHS41--g2qhra9QLzBBN_0MYEq5CNlLR21pJEJYw6TvBeWlMefW7oO87P-jhv4W4IHQNUTysXcQKCzqYgMAQWmiFPsEw_AuR3XQNfgjMH78=793E352F"
            }
        })


console.log(response);


}


createIssue("Bug created through PW API", "Creating bug using JIRA REST API")