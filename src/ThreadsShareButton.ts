import assert from './utils/assert';
import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './hocs/createShareButton';

function threadsLink(
  url: string,
  {
    title,
    via,
    hashtags = [],
    related = [],
  }: { title?: string; via?: string; hashtags?: string[]; related?: string[] },
) {
  assert(url, 'threads.url');

  return (
    'https://www.threads.net/intent/post' +
    objectToGetParams({
      url,
      text: title,
      via,
    })
  );
}

const ThreadsShareButton = createShareButton<{
  title?: string;
  via?: string;
  hashtags?: string[];
  related?: string[];
}>(
  'threads',
  threadsLink,
  props => ({
    title: props.title,
    via: props.via,
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
);

export default ThreadsShareButton;
