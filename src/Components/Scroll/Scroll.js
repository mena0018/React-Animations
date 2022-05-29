import "./Scroll.scss"
import { useState } from "react";
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from "react-spring";


export default function Scroll() {

  const [toggleTxt, setToggleTxt] = useState(false)

  const animation = useSpring({
    opacity: toggleTxt ? 1 : 0,
    transform: toggleTxt ? "translateX(0)" : "translateX(-50%)"
  })


  return (
    <div>
     <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, atque ex neque tempora illo hic assumenda cumque reprehenderit nobis repellendus amet porro. Perspiciatis repellat blanditiis, iusto, voluptate at provident odit sed esse nobis delectus doloribus adipisci excepturi ipsum rem, eos deserunt! Harum, praesentium minima! Error quidem aliquam fuga assumenda voluptates architecto alias quaerat, magni tempora soluta modi impedit? Vero commodi illo explicabo ex, dicta numquam quae accusantium! Rem, iusto vel minus exercitationem omnis amet odio neque obcaecati reiciendis pariatur illum est libero vero excepturi aspernatur, sit dicta. Eaque animi maiores quas, sit nobis cum ratione dolor dolore magni a sunt itaque quod praesentium dolores incidunt aliquam perferendis adipisci quos reprehenderit eveniet assumenda quis doloremque. Velit illum tenetur natus amet aliquid sit laborum consequatur molestias tempora magnam impedit hic, voluptate commodi atque fugit quia perferendis? Repellendus magni cum voluptatibus modi molestias, iure labore, vitae consectetur autem quis esse optio repellat. Alias dolor illum non mollitia hic quas earum esse sed doloremque eum maxime, magnam voluptatibus! Dignissimos amet optio inventore voluptatem obcaecati fuga, sed commodi animi enim dolores magnam harum, suscipit repellat illum tempora reprehenderit ratione debitis magni facilis unde, exercitationem vero? Et dolor est cumque, amet ratione placeat ut cum error!
      </p>

      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, atque ex neque tempora illo hic assumenda cumque reprehenderit nobis repellendus amet porro. Perspiciatis repellat blanditiis, iusto, voluptate at provident odit sed esse nobis delectus doloribus adipisci excepturi ipsum rem, eos deserunt! Harum, praesentium minima! Error quidem aliquam fuga assumenda voluptates architecto alias quaerat, magni tempora soluta modi impedit? Vero commodi illo explicabo ex, dicta numquam quae accusantium! Rem, iusto vel minus exercitationem omnis amet odio neque obcaecati reiciendis pariatur illum est libero vero excepturi aspernatur, sit dicta. Eaque animi maiores quas, sit nobis cum ratione dolor dolore magni a sunt itaque quod praesentium dolores incidunt aliquam perferendis adipisci quos reprehenderit eveniet assumenda quis doloremque. Velit illum tenetur natus amet aliquid sit laborum consequatur molestias tempora magnam impedit hic, voluptate commodi atque fugit quia perferendis? Repellendus magni cum voluptatibus modi molestias, iure labore, vitae consectetur autem quis esse optio repellat. Alias dolor illum non mollitia hic quas earum esse sed doloremque eum maxime, magnam voluptatibus! Dignissimos amet optio inventore voluptatem obcaecati fuga, sed commodi animi enim dolores magnam harum, suscipit repellat illum tempora reprehenderit ratione debitis magni facilis unde, exercitationem vero? Et dolor est cumque, amet ratione placeat ut cum error!
      </p>

      <Waypoint 
        bottomOffset= "30%"
        onEnter={() => {
          setToggleTxt(true)
        }}
      />

      <animated.div style={animation} className="cta-section">
          <h2>N'en ratez pas une miette !</h2>
          <form>
            <label htmlFor="email">Inscrivez vous à la newsletter</label>
            <input type="email" id="email" />
          </form>
      </animated.div>

      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, atque ex neque tempora illo hic assumenda cumque reprehenderit nobis repellendus amet porro. Perspiciatis repellat blanditiis, iusto, voluptate at provident odit sed esse nobis delectus doloribus adipisci excepturi ipsum rem, eos deserunt! Harum, praesentium minima! Error quidem aliquam fuga assumenda voluptates architecto alias quaerat, magni tempora soluta modi impedit? Vero commodi illo explicabo ex, dicta numquam quae accusantium! Rem, iusto vel minus exercitationem omnis amet odio neque obcaecati reiciendis pariatur illum est libero vero excepturi aspernatur, sit dicta. Eaque animi maiores quas, sit nobis cum ratione dolor dolore magni a sunt itaque quod praesentium dolores incidunt aliquam perferendis adipisci quos reprehenderit eveniet assumenda quis doloremque. Velit illum tenetur natus amet aliquid sit laborum consequatur molestias tempora magnam impedit hic, voluptate commodi atque fugit quia perferendis? Repellendus magni cum voluptatibus modi molestias, iure labore, vitae consectetur autem quis esse optio repellat. Alias dolor illum non mollitia hic quas earum esse sed doloremque eum maxime, magnam voluptatibus! Dignissimos amet optio inventore voluptatem obcaecati fuga, sed commodi animi enim dolores magnam harum, suscipit repellat illum tempora reprehenderit ratione debitis magni facilis unde, exercitationem vero? Et dolor est cumque, amet ratione placeat ut cum error!
      </p>

      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, atque ex neque tempora illo hic assumenda cumque reprehenderit nobis repellendus amet porro. Perspiciatis repellat blanditiis, iusto, voluptate at provident odit sed esse nobis delectus doloribus adipisci excepturi ipsum rem, eos deserunt! Harum, praesentium minima! Error quidem aliquam fuga assumenda voluptates architecto alias quaerat, magni tempora soluta modi impedit? Vero commodi illo explicabo ex, dicta numquam quae accusantium! Rem, iusto vel minus exercitationem omnis amet odio neque obcaecati reiciendis pariatur illum est libero vero excepturi aspernatur, sit dicta. Eaque animi maiores quas, sit nobis cum ratione dolor dolore magni a sunt itaque quod praesentium dolores incidunt aliquam perferendis adipisci quos reprehenderit eveniet assumenda quis doloremque. Velit illum tenetur natus amet aliquid sit laborum consequatur molestias tempora magnam impedit hic, voluptate commodi atque fugit quia perferendis? Repellendus magni cum voluptatibus modi molestias, iure labore, vitae consectetur autem quis esse optio repellat. Alias dolor illum non mollitia hic quas earum esse sed doloremque eum maxime, magnam voluptatibus! Dignissimos amet optio inventore voluptatem obcaecati fuga, sed commodi animi enim dolores magnam harum, suscipit repellat illum tempora reprehenderit ratione debitis magni facilis unde, exercitationem vero? Et dolor est cumque, amet ratione placeat ut cum error!
      </p>

    </div>
  )
}
