// import plugins from '../../data/Plugins';

import { useEffect, useState } from 'react';
import PluginItems from './PluginItem';

const AboutPlugin = () => {
  const [plugins, setPlugins] = useState([]);

  useEffect(() => {
    const url = 'https://localhost:7183/getPlugin';

    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setPlugins(result);
      });
  }, []);

  return (
    <section className="more__plugin">
      <div className="more__plugin__box">
        {plugins.map((item) => (
          <PluginItems {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default AboutPlugin;
