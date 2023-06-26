import whois from "whois";

export default async function handler(req, res) {
  const { domain } = req.query;
  console.log(domain);

  try {
    const response = await new Promise((resolve, reject) => {
      whois.lookup("peru.com", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });

    const lines = response.split("\n");
    const whoisData = {};

    lines.forEach((line) => {
      const parts = line.split(":");
      if (parts.length === 2) {
        const key = parts[0].trim();
        const value = parts[1].trim();
        if (whoisData[key]) {
          if (Array.isArray(whoisData[key])) {
            whoisData[key].push(value);
          } else {
            whoisData[key] = [whoisData[key], value];
          }
        } else {
          whoisData[key] = value;
        }
      }
    });

    res.status(200).json(whoisData);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
}
