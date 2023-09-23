import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {useNavigate} from "react-router-dom";

function Example() {
  const navigate = useNavigate();

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios
        .get('https://api.github.com/repos/tannerlinsley/react-query')
        .then((res) => res.data),
  })

  if (isLoading) return (<div>Loading...</div>)

  if (error) return (<div>'An error has occurred: ' + error</div>)

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <ReactQueryDevtools initialIsOpen />
    </div>
  )
}

export default Example;
