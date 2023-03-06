// import plugins from '../../data/Plugins';

import { useEffect, useState } from 'react';
import PluginItems from './PluginItem';

const AboutPlugin = ({ ru, kz, en }) => {
  const [plugins, setPlugins] = useState([]);

  useEffect(() => {
    const url = 'http://46.101.153.165/getPlugin';

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
          <PluginItems ru={ru} kz={kz} en={en} {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default AboutPlugin;
