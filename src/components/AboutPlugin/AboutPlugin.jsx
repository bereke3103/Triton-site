import plugins from '../../data/Plugins'

import PluginItems from './PluginItem'

const AboutPlugin = () => {
  return (
    <section className="more__plugin">
      <div className="more__plugin__box">
        {plugins.map((item) => (
          <PluginItems {...item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default AboutPlugin
