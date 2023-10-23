import { Fragment } from "react"

const guns = {
  "Assault-Rifle": "$1000",
  "Sniper": "$2000",
  "Shotgun": "$1500",
  "Revolver": "$500",
  "Machine-Gun": "$2500",
  "Pistol": "$50",
  "RPG": "$3000",
  "Laser-Gun": "$3500",
}

const inventory = {
  "Medi-Kit": "$500",
  "Molotov": "$1000",
  "Grenade": "$1500",
  "Knife": "$2000",
  "Sword": "$2500",
  "Armour": "$3000",
  "C4": "$3500",
  "Landmine": "$4000",
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-screen">
      <h1 className="font-bold text-xl mb-4">Gunsmith.onion</h1>

      <div className="flex flex-col sm:flex-row items-center justify-center sm:w-[80%] h-fit sm:h-[600px] gap-4 sm:gap-7 p-5">
        <div className="flex flex-col w-56 sm:w-full h-max border border-slate-400 rounded-lg p-8">
          <div className="w-full flex items-center justify-between px-2 pt-1">
            <label>Select guns quantity:</label>
            <select className="form-select w-14 h-10 rounded-l-lg rounded-r-lg">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-8 place-self-center mt-8">
            {Object.keys(guns).map((key, index) => (
              <Fragment key={index}>
                <div className="inline-flex items-center justify-center border border-slate-400 sm:w-32 sm:h-16 w-24 h-12">
                  {key}
                </div>
              </Fragment>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8 px-4">
            <label>
              Gun Subtotal :
            </label>

            <span className="flex items-center">
              $ <input type="text" className="ml-2 sm:w-max w-12" />
            </span>
          </div>
        </div>

        <div className="flex sm:flex-col w-56 sm:w-full h-max border border-slate-400 rounded-lg p-8">
          <div className="w-full flex items-center justify-between px-2 pt-1">
            <label>Select Inventory quantity:</label>
            <select className="form-select w-14 h-10 rounded-l-lg rounded-r-lg">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-8 place-self-center mt-8">
            {Object.keys(inventory).map((key, index) => (
              <Fragment key={index}>
                <div className="inline-flex items-center justify-center border border-slate-400 w-32 h-16">
                  {key}
                </div>
              </Fragment>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8 px-4">
            <label>
              Inventory Subtotal :
            </label>

            <span className="flex items-center">
              $ <input type="text" className="ml-2" />
            </span>
          </div>
        </div>


      </div>

      <button className="border border-slate-400 rounded-r-lg rounded-l-lg p-3 mt-16 w-56">
        Order Now
      </button>
    </main>
  )
}

