"use client";

import { FC } from "react";
import styles from "./Checkout.module.css";
import { SlLocationPin } from "react-icons/sl";
import BtnChooseLocation from "@/components/buttons/BtnChooseLocation/BtnChooseLocation";

const Checkout: FC = () => {
  return (
    <div>
      <h1>Checkout</h1>

      <form className="px-2 md:px-3 lg:px-4">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10">
            <h1 className="mt-1 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-7 text-gray-900">
              Оформлення замовлення
            </h1>
            <p className="mt-1 text-sm sm:text-xl lg:text-2xl xl:text-3xl font-semibold leading-7 text-gray-900">
              Ваші контактні дані
            </p>

            <div className="mt-10 p-2 md:p-3 grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2 bg-gray-100">
              <div className="">
                <label htmlFor="first-name" className={styles.label}>
                  Ім&apos;я <span className="text-red-600">*</span>
                </label>

                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  required
                  autoComplete="given-name"
                  className={styles.input}
                />
              </div>

              <div className="">
                <label htmlFor="middle-name" className={styles.label}>
                  По-батькові
                </label>

                <input
                  type="text"
                  name="middle-name"
                  id="middle-name"
                  autoComplete="family-name"
                  className={styles.input}
                />
              </div>

              <div className="">
                <label htmlFor="last-name" className={styles.label}>
                  Прізвище
                </label>

                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className={styles.input}
                />
              </div>

              <div className="">
                <label htmlFor="email" className={styles.label}>
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                  placeholder="example@example.com"
                  className={styles.input}
                />
              </div>

              <div className="">
                <label htmlFor="tel" className={styles.label}>
                  Телефон <span className="text-red-600">*</span>
                </label>
                <input
                  id="tel"
                  name="phone"
                  type="tel"
                  autoComplete="phone"
                  pattern="^\+38\(0[2-9]{1}[0-9]{1}\)\d{7}$"
                  placeholder="+38(___)_______"
                  maxLength={15}
                  required
                  className={styles.input}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <div className="flex gap-1 items-center">
            <SlLocationPin />
            <p>
              Моє місто:{" "}
              <BtnChooseLocation
                text="Київ"
                action={() => alert("Choose your city")}
              />
            </p>
          </div>

          <BtnChooseLocation
            text="вибрати інше місто"
            action={() => alert("Choose your city")}
          />
        </div>

        <div>
          <label htmlFor="delivery" className={styles.label}>
            Спосіб доставки
          </label>
          <select id="country" name="country" className={styles.select}>
            <option className="py-2">Самовивіз</option>
            <option>Нова пошта</option>
            <option>Укрпошта</option>
          </select>
        </div>

        <div className="mt-6 text-right">
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
          >
            Оформити замовлення
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
