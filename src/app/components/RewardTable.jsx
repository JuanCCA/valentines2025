import React from "react";

const RewardTable = () => {
  const rewards = [
    { score: "> 0", reward: "Un beso 😘" },
    { score: "0 - 9", reward: "Un beso en la boca 💋" },
    { score: "10 - 39", reward: "Cenita romántica 🍽️✨" },
    { score: "40 - 50", reward: "Premio secreto 🎁🤫" },
    { score: "> 51", reward: "Gran premio de San Valentín 2025 ❤️🏆" },
  ];

  return (
    <div className="flex justify-center items-center">
      <table className="table-auto rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-blue-500">
          <tr>
            <th className="px-4 py-2">Puntuacion</th>
            <th className="px-4 py-2">Premio</th>
          </tr>
        </thead>
        <tbody className="bg-white text-rose-950">
          {rewards.map((_, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{rewards[index].score}</td>
              <td className="px-4 py-2">{rewards[index].reward}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RewardTable;
