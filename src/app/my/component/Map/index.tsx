"use client";

import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { getEnvConfigDataAPI } from "@/api/project";

export default function MapContainer() {
    let map: any;

    useEffect(() => {
        AOS.init()

        // 确保代码仅在客户端执行
        import('@amap/amap-jsapi-loader').then(async AMapLoader => {
            const { data } = await getEnvConfigDataAPI() || { data: {} }
            const { key_code, security_code } = data as { key_code: string, security_code: string }

            // @ts-ignore
            window._AMapSecurityConfig = {
                securityJsCode: security_code,
            };

            AMapLoader.load({
                key: key_code,
                version: "2.0",
                plugins: ["AMap.Scale", "AMap.Marker"],
            })
                .then((AMap) => {
                    map = new AMap.Map("container", {
                        viewMode: "3D", // 是否为3D地图模式
                        zoom: 7,
                        center: [113.625351, 34.746303], // 初始化地图中心点位置
                    });

                    new AMap.Marker({
                        position: [113.625351, 34.746303], // 标记位置
                        map, // 将标记添加到地图
                    });
                })
                .catch((e) => {
                    console.log(e);
                });

            return () => map?.destroy();
        })
    }, []);

    return (
        <>
            <div data-aos="zoom-in" className="w-full md:w-5/12 flex flex-col mr-0 md:mr-20">
                <div className="text-center text-xl mb-8">我的家乡</div>

                <div id="container" className="w-full h-60 sm:h-80 border rounded-3xl"></div>
            </div>
        </>
    );
}